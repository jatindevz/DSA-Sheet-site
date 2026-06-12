import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface StreakSaverEmailProps {
  username?: string;
  streakDays?: number;
}

export const StreakSaverEmail = ({
  username = 'DSA Hacker',
  streakDays = 5,
}: StreakSaverEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Don't lose your {streakDays.toString()}-day streak!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🚨 Keep the momentum going!</Heading>

          <Text style={text}>
            Hey {username},
          </Text>

          <Text style={text}>
            You've been crushing it with a <strong>{streakDays}-day streak</strong> on the DSA Console, but you haven't solved a problem today!
          </Text>

          <Text style={text}>
            It takes just one problem to keep the streak alive and your brain sharp. You've got this!
          </Text>

          <Section style={btnContainer}>
            <Button style={button} href="https://love-babber-dsa-sheet-site.vercel.app/">
              Solve a Problem Now
            </Button>
          </Section>

          <Text style={footer}>
            — The DSA Console Team<br />
            Building habits that build careers.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default StreakSaverEmail;

const main = {
  backgroundColor: '#08080a',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '40px',
  margin: '0 0 20px',
};

const text = {
  color: '#e2e2e9',
  fontSize: '14px',
  lineHeight: '24px',
};

const btnContainer = {
  textAlign: 'center' as const,
  marginTop: '32px',
  marginBottom: '32px',
};

const button = {
  backgroundColor: '#10b981',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
};

const footer = {
  color: '#a1a1aa',
  fontSize: '12px',
  lineHeight: '16px',
};
