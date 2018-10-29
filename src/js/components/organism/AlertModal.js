import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import classNames from 'classnames';

import Button from '../atom/Button';

import css from '../../../styles/components/_organism.modal.scss';

Modal.setAppElement('#root');

const AlertModal = (props) => {
  const {
    children,
    confirmText,
    isLoading,
    loadingComponent,
    modalIsOpen,
    onConfirm,
    onClose,
    title,
    shouldCloseOnOverlayClick,
    fluid,
  } = props;

  const classes = classNames({
    [css['c-modal']]: true,
    [css['c-modal__alert-modal']]: true,
    [css['c-modal--fluid']]: fluid,
  });

  return (
    <Modal
      shouldCloseOnOverlayClick={isLoading ? false : shouldCloseOnOverlayClick}
      isOpen={modalIsOpen}
      onRequestClose={() => onClose()}
      className={classes}
      overlayClassName={css['c-modal-overlay']}
    >
      <header className={css['c-modal__header']}>{title}</header>
      <main className={css['c-modal__content']}>{children}</main>
      <footer className={css['c-modal__footer']}>
        {
          isLoading ? loadingComponent : (
            <div>
              <Button onClick={() => onConfirm()} primary>
                {confirmText}
              </Button>
            </div>
          )
        }
      </footer>
    </Modal>
  );
};

AlertModal.propTypes = {
  cancelText: PropTypes.string,
  children: PropTypes.node,
  confirmText: PropTypes.string,
  isLoading: PropTypes.bool,
  loadingComponent: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  shouldCloseOnOverlayClick: PropTypes.bool,
  fluid: PropTypes.bool,
};

AlertModal.defaultProps = {
  confirmText: 'Ok',
  children: null,
  isLoading: false,
  loadingComponent: null,
  shouldCloseOnOverlayClick: true,
  fluid: false,
};

export default AlertModal;
