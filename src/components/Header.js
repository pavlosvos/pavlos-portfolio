import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import NavLink from './NavLink';
import Link from './Link';

const styles = theme => ({
  brand: {
    flexGrow: 1,
    fontWeight: theme.typography.fontWeightBold,
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <AppBar color="default" elevation={0}>
      <Toolbar>
        <Link
          variant="h4"
          className={classes.brand}
          href="/"
          underline="none"
          color="initial"
        >
          Pavlos Vos
        </Link>
        <Hidden smDown>
          <NavLink />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles, { name: 'Header' })(Header);
