import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.badge.scss';

const Badge = (props) => {
  const {
    children,
    primary,
    success,
    warning,
    danger,
    grayLight,
    pill,
  } = props;

  const classes = classNames({
    [css['c-badge']]: true,
    [css['c-badge--pill']]: pill,
    [css['c-badge--primary']]: primary,
    [css['c-badge--success']]: success,
    [css['c-badge--warning']]: warning,
    [css['c-badge--danger']]: danger,
    [css['c-badge--gray-light']]: grayLight,
  });

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  grayLight: PropTypes.bool,
  pill: PropTypes.bool,
};

Badge.defaultProps = {
  children: null,
  primary: false,
  danger: false,
  warning: false,
  success: false,
  grayLight: false,
  pill: false,
};

export default Badge;
