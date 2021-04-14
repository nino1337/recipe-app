import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Button, Grid, Box, Typography } from '@material-ui/core';

import ExerciseList from './ExerciseList';
import AddExercises from './AddExercises';

const AddRoutineForm = ({ onAbortButtonClick }) => {
  const [exercises, setExercises] = useState(null);

  const isAlreadySelectedExercise = (exerciseName) =>
    exercises.find((exercise) => exercise.name === exerciseName);

  const onSelectExercises = (selectedExercises) => {
    if (exercises) {
      const newSelectedExercises = selectedExercises.filter(
        (exercise) => !isAlreadySelectedExercise(exercise.name),
      );
      setExercises((prevExercises) => [
        ...prevExercises,
        ...newSelectedExercises,
      ]);
    } else {
      setExercises(selectedExercises);
    }
  };

  const onSetsSelect = (event, exerciseName) => {
    const { value } = event.target;
    setExercises((prevExercises) => {
      const updatedExercises = prevExercises.map((prevExercise) => {
        if (exerciseName === prevExercise.name) {
          return { ...prevExercise, sets: value };
        }

        return prevExercise;
      });

      return updatedExercises;
    });
  };

  return (
    <Grid container>
      <AddExercises
        onSelectExercises={onSelectExercises}
        addedExercises={exercises}
      />
      {exercises && (
        <>
          <ExerciseList onSetsSelect={onSetsSelect} exercises={exercises} />
          <Grid item container xs={12} justify="center">
            <Box mb={2}>
              <Button color="secondary" variant="contained">
                Routine hinzufügen
              </Button>
            </Box>
          </Grid>
        </>
      )}
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

AddRoutineForm.propTypes = {
  onAbortButtonClick: propTypes.func,
};

export default AddRoutineForm;
