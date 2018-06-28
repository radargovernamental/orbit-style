import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.radio.scss';

const Radio = (props) => {
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
    [css['c-form__radio']]: true,
    [css['c-form__radio--lg']]: lg,
    [css['c-form__radio--md']]: md,
    [css['c-form__radio--sm']]: sm,
    [css['c-form__radio--xs']]: xs,
    [css['c-form__radio--error']]: error,
  });
  return (
    <label htmlFor={id} className={classes}>
      <input type="radio" name={id} id={id} {...otherProps} />
      <span className={css['c-form__radio-value']}>
        {children}
      </span>
    </label>
  );
};

Radio.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  error: PropTypes.bool,
};
Radio.defaultProps = {
  children: null,
  id: 'check',
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
};

export default Radio;
