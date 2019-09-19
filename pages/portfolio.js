import React from 'react';
import Layout from '../src/layout/Page';
import Iframe from 'react-iframe'

export default function Portfolio() {
  return (
    <Layout>
      <Iframe url="https://pavlosvos.myportfolio.com/"
        width="100%"
        height="900px"
        max-width="100%"
        frameBorder="0"
        id="myId"
        className="myClassname"
        display="block"
        position="relative"
        styles={{height: "100%"}}/>
    </Layout>
  );
}
