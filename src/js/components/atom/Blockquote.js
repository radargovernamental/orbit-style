import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.blockquote.scss';

const Blockquote = (props) => {
  const {
    children,
    className,
    primary,
    success,
    danger,
    warning,
    ...otherProps
  } = props;

  const tmpClasses = classNames({
    [css['c-blockquote']]: true,
    [css['c-blockquote--primary']]: primary,
    [css['c-blockquote--success']]: success,
    [css['c-blockquote--danger']]: danger,
    [css['c-blockquote--warning']]: warning,
  });

  const classes = `${tmpClasses} ${className}`;
  return <blockquote className={classes} {...otherProps}>{children}</blockquote>;
};

Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
};

Blockquote.defaultProps = {
  className: '',
  primary: false,
  success: false,
  danger: false,
  warning: false,
};

export default Blockquote;
