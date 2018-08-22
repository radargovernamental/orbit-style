import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_organism.message.scss';

const Message = (props) => {
  const {
    children,
    className,
    primary,
    success,
    danger,
    warning,
    gray,
    close,
    icon,
    ...otherProps
  } = props;

  const tmpClasses = classNames({
    [css['c-message']]: true,
    [css['c-message--primary']]: primary,
    [css['c-message--success']]: success,
    [css['c-message--danger']]: danger,
    [css['c-message--warning']]: warning,
    [css['c-message--gray']]: gray,
  });

  const classes = `${tmpClasses} ${className}`;
  return (
    <div className={classes} {...otherProps}>
      {icon ? <span className={css['c-message__icon']}>{icon}</span> : null}
      <span className={css['c-message__content']}>{children}</span>
      {close ? <span className={css['c-message__close']}>{close}</span> : null}
    </div>
  );
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  gray: PropTypes.bool,
  close: PropTypes.node,
  icon: PropTypes.node,
};

Message.defaultProps = {
  className: '',
  primary: false,
  success: false,
  danger: false,
  warning: false,
  gray: false,
  close: null,
  icon: null,
};

export default Message;
