import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.switch.scss';

const Switch = (props) => {
  const {
    children,
    id,
    name,
    lg,
    md,
    sm,
    xs,
    error,
    ...otherProps
  } = props;

  const classes = classNames({
    [css['c-form__switch']]: true,
    [css['c-form__switch--lg']]: lg,
    [css['c-form__switch--md']]: md,
    [css['c-form__switch--sm']]: sm,
    [css['c-form__switch--xs']]: xs,
    [css['c-form__switch--error']]: error,
  });
  return (
    <label htmlFor={id} className={classes}>
      <input type="checkbox" name={name || id} id={id} {...otherProps} />
      <span className={css['c-form__switch-value']}>
        {children}
      </span>
    </label>
  );
};

Switch.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  error: PropTypes.bool,
};
Switch.defaultProps = {
  children: null,
  name: null,
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
};

export default Switch;
