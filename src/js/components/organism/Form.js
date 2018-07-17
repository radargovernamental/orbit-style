import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import css from '../../../styles/components/_organism.form.scss';

const Form = (props) => {
  const {
    children,
    ...otherProps
  } = props;

  const classes = className({
    [css['c-form']]: true,
  });

  return (
    <form className={classes} {...otherProps}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
};
Form.defaultProps = {
  children: null,
};

export default Form;
