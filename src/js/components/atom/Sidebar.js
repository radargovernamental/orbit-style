import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_molecule.content.scss';

const Sidebar = (props) => {
  const {
    children,
    className,
  } = props;

  const classes = classNames({
    [css['c-content__sidebar']]: true,
    [className]: true,
  });

  return (
    <aside className={classes}>
      {children}
    </aside>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Sidebar.defaultProps = {
  children: null,
  className: '',
};

export default Sidebar;
