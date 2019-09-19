import React from 'react';

import Layout from '../src/layout/Page';
import Markdown from '../src/components/Markdown';

import content from './about.md';

export default function About() {
  return (
    <Layout containerProps={{ maxWidth: 'md' }}>
      <Markdown>{content}</Markdown>
    </Layout>
  );
}
