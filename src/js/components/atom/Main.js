import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_molecule.content.scss';

const Main = (props) => {
  const {
    children,
  } = props;

  const classes = classNames({
    [css['c-content__main']]: true,
  });

  return (
    <main className={classes}>
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};
Main.defaultProps = {
  children: null,
};

export default Main;
