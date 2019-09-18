import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../src/layout/Page';
import Markdown from '../../src/components/Markdown';

export default function Portfolio() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <Markdown>{slug}</Markdown>
    </Layout>
  );
}
