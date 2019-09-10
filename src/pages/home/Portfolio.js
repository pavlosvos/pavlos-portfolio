import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default function Portfolio() {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item sm xs={12}>
        <Typography variant="h2">Portfolio</Typography>
        <Typography variant="h1" color="primary" gutterBottom>
          Agile UX Designer
        </Typography>
        <Typography variant="h3">
          I guide teams with UX methodologies to improve the end-user experience
          and to exceed client’s expectations
        </Typography>
      </Grid>
      <Grid item sm="auto" xs={12}>
        <Avatar src="/static/avatar.png" style={{ width: 400, height: 400 }} />
      </Grid>
    </Grid>
  );
}
