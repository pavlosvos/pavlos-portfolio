import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';

import description from './about.md';

const styles = theme => ({
  placeholder: {
    width: 375,
    height: 400,
    backgroundImage: 'url(/static/about.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    border: `30px solid ${theme.palette.primary.main}`,
    boxSizing: 'content-box',
  },
});

function AboutMe(props) {
  const { classes } = props;
  return (
    <Section>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12} container justify="center">
          <div className={classes.placeholder} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <SectionTitle
            primary="Agile UX Designer & Unconscious Bias Advocate"
            secondary="About Me"
          />
          {description}
        </Grid>
      </Grid>
    </Section>
  );
}

export default withStyles(styles, { name: 'AboutMe' })(AboutMe);
