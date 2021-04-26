import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from '@material-ui/core';

import useContext from '../../../hooks/useContext';
import styles from './styles';
import LogTable from './LogTable';

const ExerciseSets = () => {
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [routineExercises, setRoutineExercises] = useState(null);
  const { routines, exercises } = useContext()[0];
  const classes = styles();

  const handleRoutineSelect = (event) => {
    const { value } = event.target;
    const routine = routines.find(
      (routineParam) => routineParam.name === value,
    );

    setSelectedRoutine(routine);
  };

  const getRoutineSelectItems = () => {
    return routines.map((routine) => (
      <MenuItem key={routine.name} value={routine.name}>
        {routine.name}
      </MenuItem>
    ));
  };

  const getRoutineExerciseMarkup = (routineExercise) => {
    const exercise = exercises.find((ex) => ex.id === routineExercise.id);

    return (
      <>
        <Typography variant="h5">{exercise.name}</Typography>
        <LogTable sets={routineExercise.sets} />
      </>
    );
  };

  useEffect(() => {
    if (selectedRoutine) {
      setRoutineExercises(selectedRoutine.exercises);
    }
  }, [selectedRoutine]);

  return (
    <>
      <FormControl className={classes.selectRoutine}>
        <InputLabel id="routine-select">Routine</InputLabel>
        <Select
          labelId="routine-select"
          value={selectedRoutine ? selectedRoutine.name : ''}
          onChange={handleRoutineSelect}
        >
          {getRoutineSelectItems()}
        </Select>
      </FormControl>
      <Grid item xs={12}>
        {routineExercises &&
          routineExercises.map((routineExercise) =>
            getRoutineExerciseMarkup(routineExercise),
          )}
      </Grid>
    </>
  );
};

export default ExerciseSets;
