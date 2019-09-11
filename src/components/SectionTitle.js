import React, { Fragment } from 'react';

import Typography from './Typography';

export default function SectionTitle(props) {
  const { primary, secondary } = props;
  return (
    <Fragment>
      <Typography variant="h3">{secondary}</Typography>
      <Typography variant="h2" color="primary" gutterBottom>
        {primary}
      </Typography>
    </Fragment>
  );
}
