import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import classNames from 'classnames';

import css from '../../../styles/components/_organism.modal.scss';

Modal.setAppElement('#root');

const AlertModal = (props) => {
  const {
    children,
    modalIsOpen,
    onClose,
    shouldCloseOnOverlayClick,
    fluid,
  } = props;

  const classes = classNames({
    [css['c-modal']]: true,
    [css['c-modal__empty-modal']]: true,
    [css['c-modal--fluid']]: fluid,
  });

  return (
    <Modal
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      isOpen={modalIsOpen}
      onRequestClose={() => onClose()}
      className={classes}
      overlayClassName={css['c-modal-overlay']}
    >
      {children}
    </Modal>
  );
};

AlertModal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  shouldCloseOnOverlayClick: PropTypes.bool,
  fluid: PropTypes.bool,
};

AlertModal.defaultProps = {
  children: null,
  shouldCloseOnOverlayClick: true,
  fluid: true,
};

export default AlertModal;
