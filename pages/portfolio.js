import React from 'react';
import Layout from '../src/layout/Page';

export default function Portfolio() {
  return (
    <Layout containerProps={{ style: { height: '100vh' } }}>
      <iframe
        src="https://pavlosvos.myportfolio.com/"
        width="100%"
        height="100%"
        frameborder="0"
      />
    </Layout>
  );
}
