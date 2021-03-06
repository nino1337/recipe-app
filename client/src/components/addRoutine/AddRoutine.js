import React, { useState } from 'react';
import { Add } from '@material-ui/icons';
import { IconButton, Tooltip } from '@material-ui/core';
import propTypes from 'prop-types';

import AddRoutineForm from './components/AddRoutineForm';
import Modal from '../modal/Modal';

const AddRoutine = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Tooltip title="Routine hinzufügen">
        <IconButton size="small" onClick={() => setIsOpenModal(true)}>
          <Add color="secondary" />
        </IconButton>
      </Tooltip>
      <Modal isOpen={isOpenModal}>
        <AddRoutineForm onAbortButtonClick={handleModalClose} />
      </Modal>
    </>
  );
};

AddRoutine.propTypes = {
  onAddRoutine: propTypes.func,
};

export default AddRoutine;
