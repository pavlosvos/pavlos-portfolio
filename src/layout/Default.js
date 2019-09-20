import React, { Fragment } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import LogRocket from 'logrocket';
LogRocket.init('43rdd3/fastportfolio');

import Header from '../components/Header';
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
    </Fragment>
  );
}
