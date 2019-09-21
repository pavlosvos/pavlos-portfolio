import React from 'react';
import Mailto from 'react-protected-mailto';
import { contactInfo } from '../config';
import Layout from '../src/layout/Page';
import SectionTitle from '../src/components/SectionTitle';
import Typography from '../src/components/Typography';

export default function Contact() {
  return (
    <Layout>
      <SectionTitle
        primary="let’s talk about you!"
        secondary="That’s enough about me,"
      />
      <Typography> If you want to chat please contact me at</Typography>
      <Typography>
        Phone: <Mailto tel={contactInfo.tel} /> & Email:{' '}
        <Mailto
          email={contactInfo.email}
          headers={
            ({ subject: 'let’s talk about you UX needs' },
            { cc: 'daheib@gmail.com' })
          }
        />
      </Typography>
    </Layout>
  );
}
