import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import Modal from '../modal/Modal';
import LogWorkoutForm from './components/LogWorkoutForm';

const LogWorkout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Box mb={4} mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsOpenModal(true)}
        >
          Workout loggen
        </Button>
      </Box>
      <Modal isOpen={isOpenModal}>
        <LogWorkoutForm onAbortButtonClick={handleModalClose} />
      </Modal>
    </>
  );
};

export default LogWorkout;
