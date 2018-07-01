import React from 'react';
import PropTypes from 'prop-types';

import css from '../../../styles/components/_molecule.form__box.scss';

const FormBox = (props) => {
  const { className, children } = props;
  return (<div {...props} className={`${css['c-form__box']} ${className || ''}`}>{children}</div>);
};

FormBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

FormBox.defaultProps = {
  children: null,
  className: '',
};

export default FormBox;
