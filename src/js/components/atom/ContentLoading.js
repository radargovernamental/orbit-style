import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

const ContentLoading = (props) => {
  const { children, ...otherProps } = props;

  return (
    <ContentLoader
      speed={1}
      primaryColor="#ECEFF1"
      secondaryColor="#fff"
      {...otherProps}
    >
      {children}
    </ContentLoader>
  );
};

ContentLoading.propTypes = {
  children: PropTypes.node,
};
ContentLoading.defaultProps = {
  children: null,
};

export default ContentLoading;
