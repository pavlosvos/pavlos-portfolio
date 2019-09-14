import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

import Typography from './Typography';

import NavLink from './NavLink';

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
        <Typography variant="h4" component="div" className={classes.brand}>
          Pavlos Vos
        </Typography>
        <Hidden smDown>
          <NavLink />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles, { name: 'Header' })(Header);
