import React from 'react';
import Layout from '../src/layout/Default';

import Portfolio from '../src/pages/home/Portfolio';
import AboutMe from '../src/pages/home/AboutMe';
import Explanation from '../src/pages/home/Explanation';
import Features from '../src/pages/home/Features';

export default function Home() {
  return (
    <Layout>
      <Portfolio />
      <AboutMe />
      <Explanation />
      <Features />
    </Layout>
  );
}
