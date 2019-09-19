import React from 'react';
import Layout from '../src/layout/Page';
import Mailto from 'react-protected-mailto'
import SectionTitle from '../src/components/SectionTitle';

export default function Contact() {
  return (
    <Layout>
      <SectionTitle primary="let’s talk about you!" secondary="That’s enough about me," />
      <p> If you want to chat please contact me at</p>
      <span>Phone: <Mailto tel='0041 767 22 11 43' /> </span>
      <span> & Email: <Mailto
        email='pavlos@vos.gr'
        headers={
          {subject:'let’s talk about you UX needs'},
          {cc:'daheib@gmail.com'}
        }/>
      </span>
    </Layout>
  );
}