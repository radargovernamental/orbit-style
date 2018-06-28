import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.button.scss';

const Button = (props) => {
  const {
    children,
    primary,
    success,
    danger,
    warning,
    outline,
    lg,
    md,
    sm,
    xs,
  } = props;

  const classes = classNames({
    [css['c-btn']]: true,
    [css['c-btn--primary']]: primary,
    [css['c-btn--outline-primary']]: outline && primary,
    [css['c-btn--success']]: success,
    [css['c-btn--outline-success']]: outline && success,
    [css['c-btn--danger']]: danger,
    [css['c-btn--outline-danger']]: outline && danger,
    [css['c-btn--warning']]: warning,
    [css['c-btn--outline-warning']]: outline && warning,
    [css['c-btn--lg']]: lg,
    [css['c-btn--md']]: md,
    [css['c-btn--sm']]: sm,
    [css['c-btn--xs']]: xs,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  xs: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  primary: false,
  success: false,
  danger: false,
  warning: false,
  outline: false,
  lg: false,
  md: false,
  sm: false,
  xs: false,
};

export default Button;
