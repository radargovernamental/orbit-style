import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import css from '../../../styles/components/_organism.timeline.scss';

const Timeline = (props) => {
  const {
    alternateRows,
    children,
    withDate,
  } = props;

  const classes = className({
    [css['c-timeline']]: true,
    [css['c-timeline--alternate-rows']]: alternateRows,
    [css['c-timeline--with-date']]: withDate,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Timeline.propTypes = {
  alternateRows: PropTypes.bool,
  children: PropTypes.node,
  withDate: PropTypes.bool,
};
Timeline.defaultProps = {
  alternateRows: false,
  children: null,
  withDate: false,
};

export default Timeline;
