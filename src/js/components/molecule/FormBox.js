import React from 'react';
import PropTypes from 'prop-types';

import css from '../../../styles/components/_molecule.form__box.scss';

const FormBox = (props) => {
  const {
    className,
    children,
    isLoading,
    ...otherProps
  } = props;
  return (
    <fieldset
      {...otherProps}
      className={`${css['c-form__box']} ${className || ''}`}
      disabled={isLoading}
    >
      {children}
    </fieldset>
  );
};

FormBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

FormBox.defaultProps = {
  children: null,
  className: '',
  isLoading: false,
};

export default FormBox;
