import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.tag.scss';

const TagAction = (props) => {
  const {
    children,
    onClick,
    ...otherProps
  } = props;

  const classes = classNames({
    [css['c-tag__action']]: true,
  });

  return (
    <button type="button" className={classes} onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
};

TagAction.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

TagAction.defaultProps = {
  children: null,
  onClick: f => f,
};

export default TagAction;
