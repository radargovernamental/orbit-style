import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import css from '../../../styles/components/_organism.form.scss';

const Form = (props) => {
  const {
    children,
    className,
    ...otherProps
  } = props;

  const classes = classnames({
    [css['c-form']]: true,
  });

  return (
    <form className={`${classes} ${className || ''}`} {...otherProps}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Form.defaultProps = {
  children: null,
  className: '',
};

export default Form;
