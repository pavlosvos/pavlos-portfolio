import React, { Fragment } from 'react';
import { MDXProvider } from '@mdx-js/react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '../src/components/Typography';
import Link from '../src/components/Link';
import theme from '../src/theme';

const components = {
  h1: Typography,
  h2: Typography,
  h3: Typography,
  h4: Typography,
  p: Typography,
  a: Link,
};

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <title>Pavlos Vos portfolio</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </ThemeProvider>
      </Fragment>
    );
  }
}
