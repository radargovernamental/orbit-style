/* eslint-disable jsx-a11y/label-has-for */
// eslint disable since the label will be related to other components
import React from 'react';
import PropTypes from 'prop-types';

import mainCss from '../../../styles/components/_atom.form__label.scss';
import parentCss from '../../../styles/components/_molecule.form__box.scss';

const css = Object.assign({}, mainCss, parentCss);

const FormItem = (props) => {
  const { className, htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className={`${css['c-form__label']} ${css['c-form__label--parent']} ${className || ''}`}
    >
      {children}
    </label>
  );
};

FormItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

FormItem.defaultProps = {
  children: null,
  className: '',
};

export default FormItem;
