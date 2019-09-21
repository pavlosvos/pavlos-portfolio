import React from 'react';
import Grid from '@material-ui/core/Grid';
import Section from '../../components/Section';
import Image from '../../components/Image';
import Typography from '../../components/Typography';
import Blockquote from '../../components/Blockquote';
import { social } from '../../../config';

export default function Clients() {
  return (
    <Section>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            What My Clients Say
          </Typography>
          <Typography align="center">
            I take great pride in what I do and the career I have chosen, but
            don’t
            <br />
            just take my word for it, see what some of my clients have to say!
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
<<<<<<< HEAD
          <a href={social.linkedin} target="_blank" ref="nofollow">
=======
          <a href={social.linkedin} target="_blank" ref="no-follow">
>>>>>>> e29edc6e6d2617f722016da4eda7f085b95319ca
            <Image src="/static/clients_banner.png" alt="clients_banner" />
          </a>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Blockquote>
            Pavlos encompasses the qualities of a great user experience
            designer: always puts the end user at the centre of everything we
            do, cares about the details…
          </Blockquote>
          <br />
          <Typography>
            <b>- Radek Szadorski</b>
          </Typography>
          <Typography variant="caption">
            Principal Director Accenture
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
