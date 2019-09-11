import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
});

function Section(props) {
  const { children, classes } = props;
  return (
    <section className={classes.root}>
      <Container>{children}</Container>
    </section>
  );
}

export default withStyles(styles, { name: 'Section' })(Section);
