import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.tag.scss';

const Tag = (props) => {
  const {
    children,
    primary,
    success,
    warning,
    danger,
    lg,
    md,
    sm,
    xs,
    action,
    extension,
    outline,
  } = props;

  const classes = classNames({
    [css['c-tag']]: true,
    [css['c-tag--with-action']]: !!action,
    [css['c-tag--with-extension']]: !!extension,
    [css['c-tag--primary']]: primary,
    [css['c-tag--success']]: success,
    [css['c-tag--warning']]: warning,
    [css['c-tag--danger']]: danger,
    [css['c-tag--lg']]: lg,
    [css['c-tag--md']]: md,
    [css['c-tag--sm']]: sm,
    [css['c-tag--xs']]: xs,
    [css['c-tag--outline']]: outline,
  });

  return (
    <span className={classes}>
      <span className={css['c-tag__content']}>{children}</span>
      {extension}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  action: PropTypes.bool,
  outline: PropTypes.bool,
  extension: PropTypes.node,
};

Tag.defaultProps = {
  children: null,
  primary: false,
  danger: false,
  warning: false,
  success: false,
  lg: false,
  md: false,
  sm: false,
  xs: false,
  outline: false,
  action: false,
  extension: null,
};

export default Tag;
