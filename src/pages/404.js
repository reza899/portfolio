import React from 'react';
import Head from 'next/head';
import { Section, SectionTitle, SectionText } from '../styles/GlobalComponents';
import Button from '../styles/GlobalComponents/Button';
import { Layout } from '../layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found | Reza Bozorgi</title>
        <meta name="description" content="The page you're looking for couldn't be found. Return to Reza Bozorgi's portfolio." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <SectionTitle>404 - Page Not Found</SectionTitle>
        <SectionText style={{ textAlign: 'center', maxWidth: '600px' }}>
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </SectionText>
        <Button onClick={() => window.location.href = '/portfolio/'}>
          Return to Home
        </Button>
      </Section>
    </Layout>
  );
};

export default NotFound;