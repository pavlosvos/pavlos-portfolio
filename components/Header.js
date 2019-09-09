import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Link from './Link';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}));

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Pavlos Vos
        </Typography>
        {links.map(({ key, href, label }) => (
          <Link key={key} href={href}>
            {label}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
