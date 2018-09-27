import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_organism.step-navigator.scss';

const StepNavigator = (props) => {
  const {
    className,
    children,
    currentStep,
    ...otherProps
  } = props;

  const classes = classNames({
    [css['c-step-navigator']]: true,
    [className]: true,
  });

  const totalChildren = React.Children.count(children);
  const progress = totalChildren > 0 ? (168 * (currentStep - 1)) : 0;

  return (
    <div
      {...otherProps}
      className={classes}
    >
      <div className={css['c-step-navigator__children']}>
        {children}
      </div>
      <span className={css['c-step-navigator__progress']} style={{ width: `${progress}px` }} />
    </div>
  );
};

StepNavigator.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  currentStep: PropTypes.number.isRequired,
};

StepNavigator.defaultProps = {
  className: '',
  children: null,
};

export default StepNavigator;
