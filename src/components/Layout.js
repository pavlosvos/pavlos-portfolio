import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Header from './Header';
import MobileMenu from './MobileMenu';

const styles = theme => ({
  '@global': {
    a: {
      color: 'red',
      textDecoration: 'none',
    },
  },
});

function Layout(props) {
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

export default withStyles(styles, { name: 'Layout' })(Layout);
