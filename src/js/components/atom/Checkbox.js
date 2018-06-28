import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.checkbox.scss';

const Checkbox = (props) => {
  const {
    children,
    id,
    lg,
    md,
    sm,
    xs,
    error,
    ...otherProps
  } = props;

  const classes = classNames({
    [css['c-form__checkbox']]: true,
    [css['c-form__checkbox--lg']]: lg,
    [css['c-form__checkbox--md']]: md,
    [css['c-form__checkbox--sm']]: sm,
    [css['c-form__checkbox--xs']]: xs,
    [css['c-form__checkbox--error']]: error,
  });
  return (
    <label htmlFor={id} className={classes}>
      <input type="checkbox" name={id} id={id} {...otherProps} />
      <span className={css['c-form__checkbox-value']}>
        {children}
      </span>
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  error: PropTypes.bool,
};
Checkbox.defaultProps = {
  children: null,
  id: 'check',
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
};

export default Checkbox;
