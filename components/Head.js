import React from 'react';
import NextHead from 'next/head';

export default function Head(props) {
  const { description, title, children } = props;
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
    </NextHead>
  );
}
