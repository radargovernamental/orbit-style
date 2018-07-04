import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import classNames from 'classnames';

import Button from '../atom/Button';
import Spacer from '../molecule/Spacer';

import css from '../../../styles/components/_organism.modal.scss';

Modal.setAppElement('#root');

const ConfirmModal = (props) => {
  const {
    cancelText,
    children,
    confirmText,
    isLoading,
    loadingComponent,
    modalIsOpen,
    onConfirm,
    onClose,
    title,
  } = props;

  const classes = classNames(
    css['c-modal'],
    css['c-modal__confirm-modal'],
  );

  return (
    <Modal
      shouldCloseOnOverlayClick={false}
      isOpen={modalIsOpen}
      onRequestClose={() => onClose()}
      contentLabel="Example Modal"
      className={classes}
      overlayClassName={css['c-modal-overlay']}
    >
      <header className={css['c-modal__header']}>{title}</header>
      <main className={css['c-modal__content']}>{children}</main>
      <footer className={css['c-modal__footer']}>
        {
          isLoading ? loadingComponent : (
            <div>
              <Spacer mrLg={1} mrMd={1} mrSm={1} mrXs={1} inline>
                <Button onClick={() => onConfirm()} primary>
                  {confirmText}
                </Button>
              </Spacer>
              <Button onClick={() => onClose()} outline>
                {cancelText}
              </Button>
            </div>
          )
        }
      </footer>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  cancelText: PropTypes.string,
  children: PropTypes.node,
  confirmText: PropTypes.string,
  isLoading: PropTypes.bool,
  loadingComponent: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
};

ConfirmModal.defaultProps = {
  cancelText: 'Cancelar',
  confirmText: 'Ok',
  children: null,
  isLoading: false,
  loadingComponent: null,
};

export default ConfirmModal;
