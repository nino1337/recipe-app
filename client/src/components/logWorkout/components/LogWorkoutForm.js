import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Typography, Button, Grid, Box } from '@material-ui/core';

import ExerciseSets from './ExerciseSets';
import workoutService from '../../../service/workoutService';

const LogWorkoutForm = ({ onAbortButtonClick }) => {
  const [workoutData, setWorkoutData] = useState({
    routineId: null,
    exercises: [],
  });

  const handleSaveLog = async () => {
    const { errorMessage } = await workoutService.addWorkout(workoutData);
  };

  const handleInputChange = (value, set, inputType, exerciseId) => {
    const valueAsNumber = Number(value);

    setWorkoutData((prevWorkoutData) => {
      const updatedWorkoutData = prevWorkoutData.exercises.map((exercise) => {
        if (exercise.id === exerciseId) {
          const updatedExerciseWorkload = exercise.workload.map(
            (workload, index) => {
              if (index === set) {
                return {
                  ...workload,
                  [inputType]: valueAsNumber,
                };
              }

              return workload;
            },
          );

          return {
            ...exercise,
            workload: updatedExerciseWorkload,
          };
        }

        return exercise;
      });

      return {
        ...prevWorkoutData,
        exercises: [...updatedWorkoutData],
      };
    });
  };

  const handleRoutineSelect = (routine) => {
    if (!routine) return;

    const mappedExercises = routine.exercises.map((exercise) => {
      const workloadEntry = {
        weight: 0,
        reps: 0,
      };
      const workload = Array.from(
        Array(exercise.sets).fill(workloadEntry, 0, exercise.sets.length),
      );

      return {
        id: exercise.id,
        workload,
      };
    });

    setWorkoutData({
      routineId: routine.id,
      exercises: mappedExercises,
    });
  };

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
