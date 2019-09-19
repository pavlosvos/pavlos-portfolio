import React from 'react';
import Grid from '@material-ui/core/Grid';

import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';

import description from './explanation.md';

export default function Explanation() {
  return (
    <Section>
      <SectionTitle
        primary="Agile UX: Integrating UX Design with Agile"
        secondary="Explanation"
      />
      <br />
      <Grid container spacing={10}>
        <Grid item sm={6} xs={12}>
          {description}
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          container
          justify="center"
          alignItems="center"
        >
          <img
            src="/static/explanation.png"
            alt="explanation"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Section>
  );
}
