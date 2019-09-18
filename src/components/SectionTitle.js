import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from './Typography';

const useStyles = makeStyles(theme => ({
  primary: {
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(34),
    },
  },
  secondary: {
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.pxToRem(28),
    },
  },
}));

export default function SectionTitle(props) {
  const { primary, secondary } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h3" className={classes.secondary}>
        {secondary}
      </Typography>
      <Typography
        variant="h2"
        color="primary"
        gutterBottom
        className={classes.primary}
      >
        {primary}
      </Typography>
    </Fragment>
  );
}
