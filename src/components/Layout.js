import React, { Fragment } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import Header from './Header';
import MobileMenu from './MobileMenu';

export default function Layout(props) {
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
