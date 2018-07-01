import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextareaAutosize from 'react-autosize-textarea';

import mainCss from '../../../styles/components/_atom.textarea.scss';
import parentCss from '../../../styles/components/_molecule.form__box.scss';

const css = Object.assign({}, mainCss, parentCss);


const Textarea = (props) => {
  const {
    lg,
    md,
    sm,
    xs,
    error,
    value,
    onResize,
    rows,
    maxRows,
    name,
    ...otherProps
  } = props;

  const classes = classNames({
    [css['c-form__element--value']]: value.length,
    [css['c-form__element']]: true,
    [css['c-form__textarea']]: true,
    [css['c-form__textarea--lg']]: lg,
    [css['c-form__textarea--md']]: md,
    [css['c-form__textarea--sm']]: sm,
    [css['c-form__textarea--xs']]: xs,
    [css['c-form__textarea--error']]: error,
  });
  return (
    <TextareaAutosize
      className={classes}
      onResize={onResize}
      rows={rows}
      name={name}
      id={name}
      maxRows={maxRows}
      {...otherProps}
      value={value}
    />
  );
};

Textarea.propTypes = {
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  error: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onResize: PropTypes.func,
  rows: PropTypes.number,
  maxRows: PropTypes.number,
};
Textarea.defaultProps = {
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
  value: null,
  onResize: null,
  rows: null,
  maxRows: null,
};

export default Textarea;
