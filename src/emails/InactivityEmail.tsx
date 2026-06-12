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

interface InactivityEmailProps {
  username?: string;
  daysInactive?: number;
}

export const InactivityEmail = ({
  username = 'DSA Hacker',
  daysInactive = 5,
}: InactivityEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>We miss you on the DSA Console!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Time to get back in the game! 🎮</Heading>
          
          <Text style={text}>
            Hey {username},
          </Text>
          
          <Text style={text}>
            It's been <strong>{daysInactive} days</strong> since your last coding session on the DSA Console. 
            We know life gets busy, but consistency is the key to mastering algorithms!
          </Text>
          
          <Text style={text}>
            The hardest part is just opening the editor again. Why not start with something easy today? Check out an 'Easy' problem in the DSA Patterns sheet to warm up.
          </Text>
          
          <Section style={btnContainer}>
            <Button style={button} href="https://dsatrackme.vercel.app">
              Start Warming Up
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

export default InactivityEmail;

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
  backgroundColor: '#f59e0b', // Amber color for a different feel
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
