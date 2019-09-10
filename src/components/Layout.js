import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Header from './Header';

export default function Layout(props) {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      <Toolbar />
      <Container>{children}</Container>
    </Fragment>
  );
}
