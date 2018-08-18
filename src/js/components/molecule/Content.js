import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_molecule.content.scss';

const Content = (props) => {
  const {
    children,
    sidebar,
  } = props;

  const classes = classNames({
    [css['c-content']]: true,
    [css['c-content--with-sidebar']]: sidebar,
  });

  return (
    <section className={classes}>
      {children}
    </section>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.bool,
};
Content.defaultProps = {
  children: null,
  sidebar: false,
};

export default Content;
