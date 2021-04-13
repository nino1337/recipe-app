import React from 'react';
import propTypes from 'prop-types';
import { Modal } from '@material-ui/core';

import styles from './styles';

const ModalComponent = ({ isOpen, onClose, children }) => {
  const classes = styles();
  return (
    <Modal open={isOpen} onClose={onClose} className={classes.root}>
      <div className={classes.modalContent}>{children}</div>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: propTypes.bool,
  onClose: propTypes.func,
  children: propTypes.element,
};

export default ModalComponent;
