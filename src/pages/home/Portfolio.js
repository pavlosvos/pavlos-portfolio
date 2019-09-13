import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import Typography from '../../components/Typography';

export default function Portfolio() {
  return (
    <Section>
      <Grid container spacing={4} alignItems="center">
        <Grid item sm={6} xs={12}>
          <SectionTitle primary="Agile UX Designer" secondary="Portfolio" />
          <Typography variant="subheader" style={{fontStyle: 'italic'}}>
            I guide teams <span style={{color:'lightgray'}}>with UX methodologies</span> to improve the end-user
            experience <span style={{color:'lightgray'}}>and to </span>exceed <span style={{color:'lightgray'}}>client’s</span> expectations
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} container justify="center">
          <Avatar
            alt="avatar"
            src="/static/avatar.png"
            style={{ width: 400, height: 400 }}
          />
        </Grid>
      </Grid>
    </Section>
  );
}
