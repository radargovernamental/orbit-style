import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import css from '../../../styles/components/_organism.timeline.scss';

const TimelineItem = (props) => {
  const {
    children,
    date,
  } = props;

  const classes = className({
    [css['c-timeline__item']]: true,
  });

  return (
    <div className={classes}>
      {date ? <time className={css['c-timeline__item__date']}>{date}</time> : null}
      {children}
    </div>
  );
};

TimelineItem.propTypes = {
  children: PropTypes.node,
  date: PropTypes.string,
};
TimelineItem.defaultProps = {
  children: null,
  date: null,
};

export default TimelineItem;
