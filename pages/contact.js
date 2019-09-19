import React from 'react';
import Layout from '../src/layout/Page';
import Link from '../src/components/Link';
import SectionTitle from '../src/components/SectionTitle';

export default function Contact() {
  return (
    <Layout>
      <SectionTitle primary="let’s talk about you!" secondary="That’s enough about me," />
      <p> If you want to chat please contact me at</p>
      <Link href="mailto:pavlos@vos.gr" as={`mailto:pavlos@vos.gr`}>
        <a>pavlos@vos.gr</a>
      </Link>
    </Layout>
  );
}
