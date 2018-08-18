import React from 'react';
import PropTypes from 'prop-types';

import css from '../../../styles/components/_molecule.table.scss';

const Table = (props) => {
  const {
    className,
    children,
    alternateRows,
    ...otherProps
  } = props;
  return (
    <table
      {...otherProps}
      className={`${css['c-table']} ${alternateRows ? css['c-table--alternate-rows'] : ''} ${className || ''}`}
      border={0}
    >
      {children}
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  alternateRows: PropTypes.bool,
};

Table.defaultProps = {
  children: null,
  className: '',
  alternateRows: false,
};

export default Table;
