import React from 'react';
import PropTypes from 'prop-types';

import mainCss from '../../../styles/components/_molecule.form__row.scss';
import parentCss from '../../../styles/components/_molecule.form__box.scss';

const css = Object.assign({}, mainCss, parentCss);

const FormRow = (props) => {
  const { className, children } = props;
  return (
    <div {...props} className={`${css['c-form__row']} ${css['c-form__row--parent']} ${className || ''}`}>
      {children}
    </div>
  );
};

FormRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

FormRow.defaultProps = {
  children: null,
  className: '',
};

export default FormRow;
