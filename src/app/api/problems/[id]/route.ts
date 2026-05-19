import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

// Helper: increment DailyActivity for a given date
async function incrementDailyActivity(dateStr: string) {
  await db.dailyActivity.upsert({
    where: { date: dateStr },
    update: { count: { increment: 1 } },
    create: { date: dateStr, count: 1 },
  })
}

// PATCH /api/problems/[id] - Update a problem
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { title, topicId, difficulty, status, platform, url, notes } = body

    // Check if problem exists
    const existing = await db.dSAProblem.findUnique({ where: { id } })
    if (!existing) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      )
    }

    const validDifficulties = ['easy', 'medium', 'hard']
    const validStatuses = ['todo', 'practicing', 'solved', 'revision']
    const validPlatforms = ['leetcode', 'gfg', 'hackerrank', 'codeforces', 'other']

    const data: Record<string, unknown> = {}

    if (title !== undefined) data.title = title.trim()
    if (topicId !== undefined) data.topicId = topicId
    if (difficulty !== undefined && validDifficulties.includes(difficulty)) {
      data.difficulty = difficulty
    }
    if (platform !== undefined && validPlatforms.includes(platform)) {
      data.platform = platform
    }
    if (url !== undefined) data.url = url
    if (notes !== undefined) data.notes = notes

    // Handle status changes
    if (status !== undefined && validStatuses.includes(status)) {
      data.status = status

      // If status changes to "solved" and wasn't previously solved
      if (status === 'solved' && existing.status !== 'solved') {
        data.solvedAt = new Date()
      }
      // If status changes from "solved" to something else, clear solvedAt
      if (status !== 'solved' && existing.status === 'solved') {
        data.solvedAt = null
      }
    }

    const problem = await db.dSAProblem.update({
      where: { id },
      data,
      include: {
        topic: {
          select: {
            id: true,
            name: true,
            icon: true,
            color: true,
          },
        },
      },
    })

    // If status just changed to "solved", update daily activity
    if (
      status === 'solved' &&
      existing.status !== 'solved'
    ) {
      const today = new Date().toISOString().split('T')[0]
      await incrementDailyActivity(today)
    }

    return NextResponse.json(problem)
  } catch (error) {
    console.error('Error updating problem:', error)
    return NextResponse.json(
      { error: 'Failed to update problem' },
      { status: 500 }
    )
  }
}

// DELETE /api/problems/[id] - Delete a problem
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Check if problem exists
    const existing = await db.dSAProblem.findUnique({ where: { id } })
    if (!existing) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      )
    }

    await db.dSAProblem.delete({ where: { id } })

    return NextResponse.json({ message: 'Problem deleted successfully' })
  } catch (error) {
    console.error('Error deleting problem:', error)
    return NextResponse.json(
      { error: 'Failed to delete problem' },
      { status: 500 }
    )
  }
}
