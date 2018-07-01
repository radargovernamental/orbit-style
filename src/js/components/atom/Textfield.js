import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputMask from 'react-input-mask';

import mainCss from '../../../styles/components/_atom.textfield.scss';
import parentCss from '../../../styles/components/_molecule.form__box.scss';

const css = Object.assign({}, mainCss, parentCss);

const Textfield = (props) => {
  const {
    type,
    lg,
    md,
    sm,
    xs,
    error,
    value,
    name,
    mask,
    maskChar,
    ...otherProps
  } = props;

  const classes = classNames({
    [css['c-form__element--value']]: value.length,
    [css['c-form__element']]: true,
    [css['c-form__textfield']]: true,
    [css['c-form__textfield--lg']]: lg,
    [css['c-form__textfield--md']]: md,
    [css['c-form__textfield--sm']]: sm,
    [css['c-form__textfield--xs']]: xs,
    [css['c-form__textfield--error']]: error,
    [css['c-form__textfield--value']]: value.length,
  });
  return (
    <InputMask
      type={type}
      name={name}
      id={name}
      className={classes}
      value={value}
      mask={mask}
      maskChar={maskChar}
      {...otherProps}
    />
  );
};

Textfield.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  error: PropTypes.bool,
  mask: PropTypes.string,
  maskChar: PropTypes.string,
};
Textfield.defaultProps = {
  type: 'text',
  value: '',
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
  mask: null,
  maskChar: '_',
};

export default Textfield;
