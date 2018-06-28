import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/objects/_grid.scss';

const Row = (props) => {
  const { children, gutterless } = props;

  const rowClasses = classNames({
    [css.row]: true,
    [css['row--gutterless']]: !!gutterless,
  });

  return (
    <div className={rowClasses}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node,
  gutterless: PropTypes.bool,
};
Row.defaultProps = {
  children: null,
  gutterless: false,
};

export default Row;
