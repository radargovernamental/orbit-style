import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.tag-extension.scss';

const TagExtension = (props) => {
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
  } = props;

  const classes = classNames({
    [css['c-tag-extension']]: true,
    [css['c-tag-extension--primary']]: primary,
    [css['c-tag-extension--success']]: success,
    [css['c-tag-extension--warning']]: warning,
    [css['c-tag-extension--danger']]: danger,
    [css['c-tag-extension--lg']]: lg,
    [css['c-tag-extension--md']]: md,
    [css['c-tag-extension--sm']]: sm,
    [css['c-tag-extension--xs']]: xs,
  });

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

TagExtension.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
};

TagExtension.defaultProps = {
  children: null,
  primary: false,
  danger: false,
  warning: false,
  success: false,
  lg: false,
  md: false,
  sm: false,
  xs: false,
  action: false,
};

export default TagExtension;
