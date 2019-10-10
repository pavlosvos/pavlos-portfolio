import React from 'react';
import Grid from '@material-ui/core/Grid';

import Image from '../../components/Image';
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';

const logos = [
  'accenture',
  'bundesagentur',
  'givaudan',
  'abu_dhabi_office',
  'eon',
  'allianz',
  'avacon',
  'tripsta',
  'travelplanet24',
  'julius_bar',
];

export default function Compagnies() {
  return (
    <Section>
      <SectionTitle
        primary="Some of the teams I have worked with"
        secondary="Experience"
      />
      <Grid container>
        {logos.map(logo => (
          <Grid key={logo} item sm={3} xs={6}>
            <Image src={`/static/logo/${logo}.png`} alt={logo} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
