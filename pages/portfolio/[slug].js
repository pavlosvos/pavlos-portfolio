import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../src/layout/Page';
import Typography from '../../src/components/Typography';

export default function Portfolio() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <Typography variant="h1">{slug}</Typography>
    </Layout>
  );
}
