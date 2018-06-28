import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.textfield.scss';

const Textfield = (props) => {
  const {
    type,
    lg,
    md,
    sm,
    xs,
    error,
    ...otherProps
  } = props;

  const classes = classNames({
    [css['c-form__textfield']]: true,
    [css['c-form__textfield--lg']]: lg,
    [css['c-form__textfield--md']]: md,
    [css['c-form__textfield--sm']]: sm,
    [css['c-form__textfield--xs']]: xs,
    [css['c-form__textfield--error']]: error,
  });
  return (
    <input
      type={type}
      className={classes}
      {...otherProps}
    />
  );
};

Textfield.propTypes = {
  type: PropTypes.string,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  error: PropTypes.bool,
};
Textfield.defaultProps = {
  type: 'text',
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
};

export default Textfield;
