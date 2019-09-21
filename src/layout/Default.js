import React, { Fragment } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

export default function DefaultLayout(props) {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      <Toolbar />
      {children}
      <Hidden mdUp>
        <MobileMenu />
      </Hidden>
      <Footer />
    </Fragment>
  );
}
