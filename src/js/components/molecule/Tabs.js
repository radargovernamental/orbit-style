/* eslint-disable react/no-array-index-key */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tabs, TabPanel } from 'react-tabs';

import css from '../../../styles/components/_molecule.tabs.scss';

const renderPlaceHolderPanels = (children) => {
  // Get number of tabs
  let total = 0;
  if (children && children.props && children.props.children) {
    total = children.props.children.length;
  }
  return (
    <Fragment>
      {Array.from({ length: total }).map((_, i) => <TabPanel key={i}></TabPanel>)}
    </Fragment>
  );
};

const TabsComponent = (props) => {
  const { children, className, withPanel, ...otherProps } = props;

  const classNames = `${className || ''} ${css.tabs}`;
  return (
    <Tabs {...otherProps} className={classNames}>
      {children}
      {!withPanel ? renderPlaceHolderPanels(children) : null}
    </Tabs>
  );
};

TabsComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  withPanel: PropTypes.bool,
};
TabsComponent.defaultProps = {
  children: null,
  className: '',
  withPanel: true,
};

export default TabsComponent;
