import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Typography from './Typography';
import Blockquote from './Blockquote';
import Link from './Link';

const options = {
  overrides: {
    h1: { component: Typography, props: { gutterBottom: true, variant: 'h1' } },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h2' } },
    h3: { component: Typography, props: { gutterBottom: true, variant: 'h3' } },
    h4: { component: Typography, props: { gutterBottom: true, variant: 'h4' } },
    p: {
      component: Typography,
      props: { gutterBottom: true, variant: 'body1' },
    },
    blockquote: { component: Blockquote },
    a: { component: Link },
  },
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
