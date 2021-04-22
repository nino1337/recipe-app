import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Button, Grid, Box, Typography, TextField } from '@material-ui/core';

import ExerciseList from './ExerciseList';
import AddExercises from './AddExercises';
import workoutService from '../../../service/workoutService';

import useContext from '../../../hooks/useContext';

const AddRoutineForm = ({ onAbortButtonClick }) => {
  const setContext = useContext()[1];
  const [exercises, setExercises] = useState(null);
  const [routineName, setRoutineName] = useState('');

  const isAlreadySelectedExercise = (exerciseName) =>
    exercises.find((exercise) => exercise.name === exerciseName);

  const isNotRemovedExercise = (exerciseName, selectedExercises) =>
    selectedExercises.find((exercise) => exercise.name === exerciseName);

  const handleSelectExercises = (selectedExercises) => {
    if (exercises) {
      setExercises((prevExercises) => {
        // remove already selected exercises from the list
        const newSelectedExercises = selectedExercises.filter(
          (exercise) => !isAlreadySelectedExercise(exercise.name),
        );

        // remove exercises that have been removed from the selection list
        const newPrevExercises = prevExercises.filter((exercise) =>
          isNotRemovedExercise(exercise.name, selectedExercises),
        );

        return [...newPrevExercises, ...newSelectedExercises];
      });
    } else {
      setExercises(selectedExercises);
    }
  };

  const handleSelectSets = (event, exerciseName) => {
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

  const handleRoutineNameChange = (event) => {
    setRoutineName(event.target.value);
  };

  const addRoutine = async () => {
    const mappedExercises = exercises.map((exercise) => ({
      id: exercise.id,
      sets: exercise.sets || 3,
    }));
    const routine = {
      name: routineName,
      exercises: mappedExercises,
    };

    const { errorMessage } = await workoutService.addRoutine(routine);

    if (errorMessage) {
      console.log(errorMessage);
    } else {
      setContext((prevContext) => ({
        ...prevContext,
        routines: [...prevContext.routines, routine],
      }));
      onAbortButtonClick(); // close modal
    }
  };

  return (
    <Grid container>
      <Box mb={3}>
        <TextField label="Routinen-Name*" onChange={handleRoutineNameChange} />
      </Box>
      <AddExercises
        onSelectExercises={handleSelectExercises}
        addedExercises={exercises}
      />
      {exercises && (
        <>
          <ExerciseList onSetsSelect={handleSelectSets} exercises={exercises} />
          <Grid item container xs={12} justify="center">
            <Box mb={2}>
              <Button
                color="secondary"
                variant="contained"
                onClick={addRoutine}
                disabled={!(exercises.length && routineName)}
              >
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
  onAddRoutine: propTypes.func,
};

export default AddRoutineForm;
