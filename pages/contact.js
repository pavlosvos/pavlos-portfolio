import React from 'react';
import Layout from '../src/layout/Page';
import SectionTitle from '../src/components/SectionTitle';

export default function Contact() {
  return (
    <Layout>
      <SectionTitle primary="let’s talk about you!" secondary="That’s enough about me," />
      <p> If you want to chat please contact me at</p>
      <p>pavlos (at) vos (dot) gr</p>
    </Layout>
  );
}
