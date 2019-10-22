import React from 'react';
import Layout from '../src/layout/Page';
import Markdown from '../src/components/Markdown';
import SectionTitle from '../src/components/SectionTitle';
import Typography from '../src/components/Typography';

import content from './portfolio.md';

export default function Portfolio() {
  return (
    <Layout containerProps={{ style: { height: '100vh' } }}>
       <SectionTitle
        primary="The nature of this work is confidential."
        secondary="UX Design work for Accenture & Fjord and more"
      />
      <Markdown>{content}</Markdown>
      <iframe
        src="https://pavlosvos.myportfolio.com/"
        width="100%"
        height="100%"
        frameborder="0"
      />
    </Layout>
  );
}
