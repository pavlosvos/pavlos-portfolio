import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { capitalize } from '@material-ui/core/utils/helpers';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing) => ({
    fontFamily: theme.typography.fontFamily,
    fontWeight,
    fontSize: theme.typography.pxToRem(size),
    color: theme.palette.text.primary,
    lineHeight: `${lineHeight / size}`,
    letterSpacing: `${letterSpacing}px`,
  });
  return {
    root: {
      margin: 0,
      display: 'block',
      textDecoration: 'none',
    },
    hero: buildVariant(500, 96, 100, -6),
    h1: buildVariant(700, 72, 82, -4),
    h2: buildVariant(700, 48, 57, -2),
    h3: buildVariant(700, 36, 48, -2),
    h4: buildVariant(700, 24, 36, -1),
    subheader: buildVariant(400, 22, 34, -0.2),
    body1: buildVariant(400, 18, 28, 0),
    body2: buildVariant(400, 16, 24, 0),
    caption: buildVariant(400, 14, 14, 0),
    gutterBottom: {
      marginBottom: theme.spacing(2),
    },
    colorInherit: {
      color: 'inherit',
    },
    colorPrimary: {
      color: theme.palette.primary.main,
    },
  };
};

const variantMapping = {
  hero: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subheader: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
};

const Typography = forwardRef(function Typography(props, ref) {
  const {
    classes,
    className,
    component,
    variant = 'body1',
    color = 'initial',
    gutterBottom = false,
    ...other
  } = props;
  const Component = component || variantMapping[variant];
  return (
    <Component
      className={clsx(
        classes.root,
        {
          [classes[variant]]: variant,
          [classes[`color${capitalize(color)}`]]: color !== 'initial',
          [classes.gutterBottom]: gutterBottom,
        },
        className
      )}
      ref={ref}
      {...other}
    />
  );
});

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'hero',
    'h1',
    'h2',
    'h3',
    'h4',
    'subheader',
    'body1',
    'body2',
    'caption',
  ]),
  color: PropTypes.oneOf(['initial', 'inherit', 'primary']),
};

export default withStyles(styles, { name: 'Typography' })(Typography);
