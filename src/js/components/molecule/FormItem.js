import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import mainCss from '../../../styles/components/_molecule.form__item.scss';
import parentCss from '../../../styles/components/_molecule.form__box.scss';

const css = Object.assign({}, mainCss, parentCss);

const FormItem = (props) => {
  const {
    className,
    children,
    lg,
    md,
    sm,
    isActive,
    ...otherProps
  } = props;

  const lgClass = lg ? css[`c-form__item--col-lg-${lg}`] : '';
  const mdClass = md ? css[`c-form__item--col-md-${md}`] : '';
  const smClass = sm ? css[`c-form__item--col-sm-${sm}`] : '';
  const activeClass = isActive ? css['c-form__item--active'] : '';

  const classes = classNames(
    css['c-form__item'],
    css['c-form__item--parent'],
    className,
    lgClass,
    mdClass,
    smClass,
    activeClass,
  );

  return (
    <div
      {...otherProps}
      className={classes}
    >
      {children}
    </div>
  );
};

FormItem.propTypes = {
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

FormItem.defaultProps = {
  lg: null,
  md: null,
  sm: null,
  children: null,
  className: '',
  isActive: false,
};

export default FormItem;
