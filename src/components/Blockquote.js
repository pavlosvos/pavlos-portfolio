import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { capitalize } from '@material-ui/core/utils/helpers';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'relative',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(22),
    color: theme.palette.text.primary,
    lineHeight: '36px',
    letterSpacing: 1,
    margin: 0,
    display: 'block',
    fontStyle: 'italic',
    paddingLeft: 24,
    '&:before': {
      content: '"“"',
      fontSize: 80,
      position: 'absolute',
      top: 10,
      left: -16,
      display: 'block',
      color: theme.palette.primary.main,
    },
  },
  alignCenter: {
    textAlign: 'center',
  },
  colorInherit: {
    color: 'inherit',
  },
  colorPrimary: {
    color: theme.palette.primary.main,
  },
});

const Blockquote = forwardRef(function Blockquote(props, ref) {
  const {
    classes,
    className,
    component,
    color = 'initial',
    align = 'inherit',
    ...other
  } = props;
  const Component = component || 'blockquote';
  return (
    <Component
      className={clsx(
        classes.root,
        {
          [classes[`color${capitalize(color)}`]]: color !== 'initial',
          [classes[`align${capitalize(align)}`]]: align !== 'inherit',
        },
        className
      )}
      ref={ref}
      {...other}
    />
  );
});

Blockquote.propTypes = {
  color: PropTypes.oneOf(['initial', 'inherit', 'primary']),
  align: PropTypes.oneOf(['inherit', 'center']),
};

export default withStyles(styles, { name: 'Blockquote' })(Blockquote);
