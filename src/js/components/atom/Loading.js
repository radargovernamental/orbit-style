import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.loading.scss';

const Loading = (props) => {
  const {
    children,
    white,
    primary,
    success,
    warning,
    danger,
    lg,
    md,
    sm,
    xs,
    inline,
  } = props;

  const classes = classNames({
    [css['c-loading']]: true,
    [css['c-loading--white']]: white,
    [css['c-loading--primary']]: primary,
    [css['c-loading--success']]: success,
    [css['c-loading--warning']]: warning,
    [css['c-loading--danger']]: danger,
    [css['c-loading--lg']]: lg,
    [css['c-loading--md']]: md,
    [css['c-loading--sm']]: sm,
    [css['c-loading--xs']]: xs,
    [css['c-loading--inline']]: inline,
  });

  return (
    <div className={classes}>
      {children ? <span>{children}</span> : null}
    </div>
  );
};

Loading.propTypes = {
  children: PropTypes.node,
  white: PropTypes.bool,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  inline: PropTypes.bool,
};

Loading.defaultProps = {
  children: null,
  white: false,
  primary: false,
  danger: false,
  warning: false,
  success: false,
  lg: false,
  md: false,
  sm: false,
  xs: false,
  inline: false,
};

export default Loading;
