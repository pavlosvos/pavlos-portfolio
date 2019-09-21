import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    maxWidth: '100%',
    height: 'auto',
  },
});

function Image(prop) {
  const { src, alt, classes } = prop;
  return <img src={src} alt={alt} className={classes.root} />;
}

export default withStyles(styles, { name: 'Image' })(Image);
