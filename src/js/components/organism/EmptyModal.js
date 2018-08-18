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
  } = props;

  const classes = classNames(
    css['c-modal'],
    css['c-modal__empty-modal'],
  );

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
};

AlertModal.defaultProps = {
  children: null,
  shouldCloseOnOverlayClick: true,
};

export default AlertModal;
