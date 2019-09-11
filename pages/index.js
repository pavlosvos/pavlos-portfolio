import React from 'react';
import Layout from '../src/components/Layout';

import Portfolio from '../src/pages/home/Portfolio';
import AboutMe from '../src/pages/home/AboutMe';
import Explanation from '../src/pages/home/Explanation';

export default function Home() {
  return (
    <Layout>
      <Portfolio />
      <AboutMe />
      <Explanation />
    </Layout>
  );
}
