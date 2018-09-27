import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_molecule.step-navigator__item.scss';

const CheckIcon = () => (
  <svg width={15} height={12}>
    <path
      d="M14.1 3L12 .9l-6 6-3-3L.9 6 6 11.1z"
      fill="#FFF"
      fillRule="nonzero"
    />
  </svg>
);

const StepNavigatorItem = (props) => {
  const {
    className,
    active,
    done,
    number,
    label,
    ...otherProps
  } = props;

  const classes = classNames({
    [css['c-step-navigator__item']]: true,
    [className]: true,
    [css['c-step-navigator__item--active']]: active,
    [css['c-step-navigator__item--done']]: done,
  });

  return (
    <button
      type="button"
      {...otherProps}
      className={classes}
    >
      <span className={css['c-step-navigator__item__number']}>{done ? <CheckIcon /> : number}</span>
      <span className={css['c-step-navigator__item__label']}>{label}</span>
    </button>
  );
};

StepNavigatorItem.propTypes = {
  className: PropTypes.string,
  number: PropTypes.number,
  label: PropTypes.string,
  active: PropTypes.bool,
  done: PropTypes.bool,
};

StepNavigatorItem.defaultProps = {
  className: '',
  active: false,
  done: false,
  number: 1,
  label: 'Untitled',
};

export default StepNavigatorItem;
