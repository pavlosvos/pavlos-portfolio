import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import Typography from '../../components/Typography';

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

const bio = [
  `I excel at being a Agile UX Consultant, mentor, and coach in Web &
  Mobile development projects.`,

  `Having worked as a hybrid designer and
  developer, I am uniquely qualified to bridge both rolls and lead
  multi-discipline teams to the successful creation of even the most
  challenging projects.`,

  `My international career has given me the
  opportunity to lead UX/UI teams on a broad spectrum of
  mission-critical projects for clients that include Bundesagentur für
  Arbeit, Allianz, EON, and The Abu Dhabi Executive Office and
  Givaudan in Kemptthal and Paris.`,

  `In my career, I have worked for
  start-ups, mature internet companies, and consulting firms; giving
  me a qualified perspective on different aspects of the business. I
  am a strong proponent for Agile UX methodologies and the efficiency
  benefits they bring to projects and organizations.`,
];
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
          {bio.map(item => (
            <Typography key={item} gutterBottom>
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Section>
  );
}

export default withStyles(styles, { name: 'AboutMe' })(AboutMe);
