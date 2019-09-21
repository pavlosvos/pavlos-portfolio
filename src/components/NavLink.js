import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from './Link';
import { siteLinks } from '../../config';

const styles = theme => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    lineHeight: '20px',
    '&:after': {
      content: '""',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 0,
      height: 2,
      transition: 'width .3s',
    },
    '&$active, &:hover': {
      '&:after': {
        width: '100%',
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  active: {},
});

const links = siteLinks.map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

function NavLink(props) {
  const { classes } = props;
  return (
    <Fragment>
      {links.map(({ key, href, label }) => (
        <Link
          key={key}
          href={href}
          underline="none"
          activeClassName={classes.active}
          className={classes.root}
        >
          {label}
        </Link>
      ))}
    </Fragment>
  );
}

export default withStyles(styles, { name: 'NavLink' })(NavLink);
