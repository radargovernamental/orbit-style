/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_molecule.spacer.scss';

const Spacer = (props) => {
  const { children, inline, style } = props;

  const classes = [];
  const directions = ['mt', 'mr', 'mb', 'ml', 'pt', 'pr', 'pb', 'pl'];
  const breakpoints = ['Lg', 'Md', 'Sm', 'Sx'];
  directions.forEach((direction) => {
    breakpoints.forEach((breakpoint) => {
      const name = `${direction}${breakpoint}`;
      if (props[name]) {  //eslint-disable-line
        classes.push(css[`${direction}-${breakpoint.toLowerCase()}-${props[name]}`]); //eslint-disable-line
      }
    });
  });

  classes.push(css['c-spacer']);
  if (inline) classes.push(css['c-spacer--inline']);

  return (
    <div className={classNames(classes)} style={style}>
      {children}
    </div>
  );
};

Spacer.propTypes = {
  mtLg: PropTypes.number,
  mtMd: PropTypes.number,
  mtSm: PropTypes.number,
  mtXs: PropTypes.number,
  mrLg: PropTypes.number,
  mrMd: PropTypes.number,
  mrSm: PropTypes.number,
  mrXs: PropTypes.number,
  mbLg: PropTypes.number,
  mbMd: PropTypes.number,
  mbSm: PropTypes.number,
  mbXs: PropTypes.number,
  mlLg: PropTypes.number,
  mlMd: PropTypes.number,
  mlSm: PropTypes.number,
  mlXs: PropTypes.number,
  ptLg: PropTypes.number,
  ptMd: PropTypes.number,
  ptSm: PropTypes.number,
  ptXs: PropTypes.number,
  prLg: PropTypes.number,
  prMd: PropTypes.number,
  prSm: PropTypes.number,
  prXs: PropTypes.number,
  pbLg: PropTypes.number,
  pbMd: PropTypes.number,
  pbSm: PropTypes.number,
  pbXs: PropTypes.number,
  plLg: PropTypes.number,
  plMd: PropTypes.number,
  plSm: PropTypes.number,
  plXs: PropTypes.number,
  children: PropTypes.node,
  style: PropTypes.object,
  inline: PropTypes.bool,
};
Spacer.defaultProps = {
  mtLg: null,
  mtMd: null,
  mtSm: null,
  mtXs: null,
  mrLg: null,
  mrMd: null,
  mrSm: null,
  mrXs: null,
  mbLg: null,
  mbMd: null,
  mbSm: null,
  mbXs: null,
  mlLg: null,
  mlMd: null,
  mlSm: null,
  mlXs: null,
  ptLg: null,
  ptMd: null,
  ptSm: null,
  ptXs: null,
  prLg: null,
  prMd: null,
  prSm: null,
  prXs: null,
  pbLg: null,
  pbMd: null,
  pbSm: null,
  pbXs: null,
  plLg: null,
  plMd: null,
  plSm: null,
  plXs: null,
  children: null,
  style: {},
  inline: false,
};

export default Spacer;
