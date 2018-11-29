/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../atom/Tooltip';

const TooltipHelp = ({
  fill, title, tabIndex, animation, ...props
}) => (
  <Tooltip title={title} tabIndex={tabIndex} animation={animation}>
    <svg width={18} height={18} {...props}>
      <path
        d="M9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 14.625c-.675 0-1.125-.45-1.125-1.125s.45-1.125 1.125-1.125 1.125.45 1.125 1.125-.45 1.125-1.125 1.125zm1.688-5.175c-.563.338-.563.45-.563.675v1.125h-2.25v-1.125c0-1.463.9-2.138 1.575-2.588.563-.337.675-.45.675-.787 0-.675-.45-1.125-1.125-1.125-.45 0-.787.225-1.013.563L7.425 7.2 5.513 6.075l.562-1.013C6.638 4.05 7.763 3.375 9 3.375c1.912 0 3.375 1.463 3.375 3.375 0 1.575-1.012 2.25-1.688 2.7z"
        fill={fill}
        fillRule="nonzero"
      />
    </svg>
  </Tooltip>
);

TooltipHelp.propTypes = {
  fill: PropTypes.string,
  title: PropTypes.string.isRequired,
  tabIndex: PropTypes.number,
  animation: PropTypes.string,
};

TooltipHelp.defaultProps = {
  fill: '#B0BEC5',
  tabIndex: 0,
  animation: 'perspective',
};

export default TooltipHelp;
