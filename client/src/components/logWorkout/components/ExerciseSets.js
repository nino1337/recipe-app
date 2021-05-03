import React, { useState, useEffect, Fragment } from 'react';
import propTypes from 'prop-types';
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

const ExerciseSets = ({
  onInputChange,
  onRoutineSelect,
  onDeleteSet,
  routineExercises,
  onAddSet,
}) => {
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const { routines, exercises } = useContext()[0];
  const classes = styles();

  const handleRoutineSelect = (event) => {
    const { value } = event.target;
    const routine = routines.find(
      (routineParam) => routineParam.name === value,
    );

    setSelectedRoutine(routine || null);
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
      <Fragment key={exercise.id}>
        <Typography variant="h4">{exercise.name}</Typography>
        <LogTable
          onDeleteSet={(set) => onDeleteSet(set, exercise.id)}
          sets={routineExercise.workload}
          onInputChange={(value, set, inputType) =>
            onInputChange(value, set, inputType, exercise.id)
          }
          onAddSet={() => onAddSet(exercise.id)}
        />
      </Fragment>
    );
  };

  useEffect(() => {
    if (selectedRoutine && selectedRoutine.exercises) {
      onRoutineSelect(selectedRoutine);
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

ExerciseSets.propTypes = {
  onInputChange: propTypes.func,
  onRoutineSelect: propTypes.func,
  onAddSet: propTypes.func,
  onDeleteSet: propTypes.func,
  routineExercises: propTypes.array,
};

export default ExerciseSets;
