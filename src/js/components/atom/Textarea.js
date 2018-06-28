import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.textarea.scss';

const Textarea = (props) => {
  const {
    lg,
    md,
    sm,
    xs,
    error,
    value,
    ...otherProps
  } = props;

  const classes = classNames({
    [css['c-form__textarea']]: true,
    [css['c-form__textarea--lg']]: lg,
    [css['c-form__textarea--md']]: md,
    [css['c-form__textarea--sm']]: sm,
    [css['c-form__textarea--xs']]: xs,
    [css['c-form__textarea--error']]: error,
  });
  return (
    <textarea
      className={classes}
      {...otherProps}
    >
      {value}
    </textarea>
  );
};

Textarea.propTypes = {
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  error: PropTypes.bool,
  value: PropTypes.string,
};
Textarea.defaultProps = {
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
  value: null,
};

export default Textarea;
