import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.bullet.scss';

const Bullet = (props) => {
  const {
    primary, danger, warning, success, grayLight, lg, sm, xs,
  } = props;

  const classes = classNames({
    [css.bullet]: true,
    [css['bullet--primary']]: primary,
    [css['bullet--success']]: success,
    [css['bullet--warning']]: warning,
    [css['bullet--grayLight']]: grayLight,
    [css['bullet--danger']]: danger,
    [css['bullet--lg']]: lg,
    [css['bullet--sm']]: sm,
    [css['bullet--xs']]: xs,
  });

  return <span className={classes} />;
};

Bullet.propTypes = {
  danger: PropTypes.bool,
  grayLight: PropTypes.bool,
  lg: PropTypes.bool,
  primary: PropTypes.bool,
  sm: PropTypes.bool,
  success: PropTypes.bool,
  xs: PropTypes.bool,
  warning: PropTypes.bool,
};

Bullet.defaultProps = {
  danger: false,
  grayLight: false,
  lg: false,
  primary: false,
  sm: false,
  success: false,
  xs: false,
  warning: false,
};

export default Bullet;
