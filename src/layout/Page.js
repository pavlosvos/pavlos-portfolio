import React from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import DefaultLayout from './Default';

export default function PageLayout(props) {
  const { containerProps, children } = props;
  return (
    <DefaultLayout>
      <Toolbar />
      <Container {...containerProps}>{children}</Container>
    </DefaultLayout>
  );
}
