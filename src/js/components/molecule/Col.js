import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/objects/_grid.scss';

const Col = (props) => {
  const {
    children,
    lg,
    md,
    sm,
    xs,
    lgOffset,
    mdOffset,
    smOffset,
    xsOffset,
    ...otherProps
  } = props;


  const lgClass = `${css[`col--lg-${lg}`]}`;
  const mdClass = `${css[`col--md-${sm}`]}`;
  const smClass = `${css[`col--sm-${md}`]}`;
  const xsClass = `${css[`col--xs-${xs}`]}`;
  const lgOffsetClass = lgOffset ? `${css[`col--lg-offset-${lgOffset}`]}` : '';
  const mdOffsetClass = mdOffset ? `${css[`col--md-offset-${mdOffset}`]}` : '';
  const smOffsetClass = smOffset ? `${css[`col--sm-offset-${smOffset}`]}` : '';
  const xsOffsetClass = xsOffset ? `${css[`col--xs-offset-${xsOffset}`]}` : '';

  const colClasses = classNames(
    css.col,
    lgClass,
    mdClass,
    smClass,
    xsClass,
    lgOffsetClass,
    mdOffsetClass,
    smOffsetClass,
    xsOffsetClass,
  );

  return (
    <div className={colClasses} {...otherProps}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node,
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number,
  lgOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  smOffset: PropTypes.number,
  xsOffset: PropTypes.number,
};

Col.defaultProps = {
  children: null,
  lg: 12,
  md: 12,
  sm: 12,
  xs: 12,
  lgOffset: 0,
  mdOffset: 0,
  smOffset: 0,
  xsOffset: 0,
};

export default Col;
