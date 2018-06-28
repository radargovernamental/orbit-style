import React from 'react';
import PropTypes from 'prop-types';

import css from '../../../styles/objects/_grid.scss';

const Container = (props) => {
  const { children } = props;
  return (
    <div className={css.container}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};
Container.defaultProps = {
  children: null,
};

export default Container;
