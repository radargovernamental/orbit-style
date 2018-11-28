import React from 'react';
import PropTypes from 'prop-types';

import Text from '../atom/Text';
import Badge from '../atom/Badge';

import css from '../../../styles/components/_molecule.badge-with-text.scss';

const BadgeWithText = (props) => {
  const {
    badgePrimary,
    badgeSuccess,
    badgeDanger,
    badgeGrayLight,
    number,
    children,
  } = props;

  return (
    <span className={css['c-badgeWithText']}>
      <span className={css['c-badgeWithText__wrapper']}>
        <Badge
          primary={badgePrimary}
          success={badgeSuccess}
          danger={badgeDanger}
          grayLight={badgeGrayLight}
        >
          {number}
        </Badge>
        {children ? <Text className={css['c-badgeWithText__text']}>{children}</Text> : null}
      </span>
    </span>
  );
};

BadgeWithText.propTypes = {
  badgePrimary: PropTypes.bool,
  badgeSuccess: PropTypes.bool,
  badgeDanger: PropTypes.bool,
  badgeGrayLight: PropTypes.bool,
  number: PropTypes.number,
  children: PropTypes.node,
};

BadgeWithText.defaultProps = {
  badgePrimary: false,
  badgeSuccess: false,
  badgeDanger: false,
  badgeGrayLight: false,
  number: null,
  children: null,
};

export default BadgeWithText;
