import React, { Fragment, useState, forwardRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';
import Slide from '@material-ui/core/Slide';

import NavLink from './NavLink';
import AddIcon from '../icons/Add';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: theme.zIndex.snackbar,
  },
  icon: {
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.short,
    }),
  },
  iconOpen: {
    transform: 'rotate(135deg)',
  },
  dialog: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MobileNav() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <Fragment>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        className={classes.fab}
      >
        <AddIcon className={clsx(classes.icon, { [classes.iconOpen]: open })} />
      </Fab>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        classes={{ paper: classes.dialog }}
      >
        <NavLink />
      </Dialog>
    </Fragment>
  );
}
