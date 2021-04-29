import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Typography, Button, Grid, Box } from '@material-ui/core';

import ExerciseSets from './ExerciseSets';
import workoutService from '../../../service/workoutService';

const LogWorkoutForm = ({ onAbortButtonClick }) => {
  const [workoutData, setWorkoutData] = useState({
    routine: null,
    epoch: null,
    exercises: [],
  });

  const handleSaveLog = async () => {
    const { errorMessage } = await workoutService.addWorkout(workoutData);
  };

  const handleInputChange = (value, inputType, exerciseName) => {
    console.log({ value }, { inputType }, { exerciseName });
  };

  const handleRoutineSelect = (routine) => {
    setWorkoutData((prevWorkoutData) => ({
      ...prevWorkoutData,
      routine: routine.name,
    }));
  };

  console.log(workoutData);

  return (
    <Grid container>
      <Grid item container xs={12} justify="center">
        <ExerciseSets
          onInputChange={handleInputChange}
          onRoutineSelect={handleRoutineSelect}
        />
      </Grid>
      <Grid item container xs={12} justify="center">
        <Box mb={2}>
          <Button color="primary" variant="contained" onClick={handleSaveLog}>
            Speichern
          </Button>
        </Box>
      </Grid>
      <Grid item container xs={12} justify="center">
        <Button onClick={onAbortButtonClick}>
          <Typography color="error" style={{ fontSize: '0.8rem' }}>
            Abbrechen
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

LogWorkoutForm.propTypes = {
  onAbortButtonClick: propTypes.func,
};

export default LogWorkoutForm;
