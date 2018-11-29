import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as Wrapper } from 'react-tippy';

import css from '../../../styles/components/_atom.tooltip.scss';

const Tooltip = ({
  title, animation, tabIndex, children, ...props
}) => (
  <Wrapper
    {...props}
    title={title}
    animation={animation}
    arrow
    interactive
    tabIndex={tabIndex}
    className={css.tooltip}
  >
    {children}
  </Wrapper>
);

Tooltip.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  animation: PropTypes.oneOf(['shift', 'perspective', 'fade', 'scale', 'none']),
};
Tooltip.defaultProps = {
  children: null,
  tabIndex: 0,
  animation: 'perspective',
};

export default Tooltip;
