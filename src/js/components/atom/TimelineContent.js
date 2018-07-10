import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import css from '../../../styles/components/_organism.timeline.scss';

const TimelineContent = (props) => {
  const {
    children,
  } = props;

  const classes = className({
    [css['c-timeline__item__content']]: true,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

TimelineContent.propTypes = {
  children: PropTypes.node,
};
TimelineContent.defaultProps = {
  children: null,
};

export default TimelineContent;
