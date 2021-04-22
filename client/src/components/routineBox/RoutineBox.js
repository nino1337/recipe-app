import React from 'react';
import { Typography, IconButton, Tooltip } from '@material-ui/core';
import propTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

import Widget from '../widget/Widget';
import styles from './styles';
import useContext from '../../hooks/useContext';

import workoutService from '../../service/workoutService';

const RoutineBox = ({ routine }) => {
  const classes = styles();
  const [{ exercises: contextExercises }, setContext] = useContext();

  const getRoutineInfo = (exercise, routineName) => {
    const currentExercise = contextExercises.find(
      (contextExercise) => contextExercise.id === exercise.id,
    );

    return (
      <div className={classes.exercise}>
        <img src={currentExercise.image} alt={currentExercise.name} />
        <Typography key={routineName + exercise.id}>
          {exercise.sets}x {currentExercise.name}
        </Typography>
      </div>
    );
  };

  const handleDeleteRoutine = async () => {
    const { errorMessage } = await workoutService.deleteRoutine(routine);

    if (errorMessage) {
      console.log({ errorMessage });
    } else {
      setContext((prevContext) => ({
        ...prevContext,
        routines: prevContext.routines.filter(
          (contextRoutines) => contextRoutines.name !== routine.name,
        ),
      }));
    }
  };

  return (
    <Widget dimensions={{ xs: 12, sm: 6, md: 4 }} className={classes.root}>
      <Tooltip title="Routine löschen">
        <IconButton className={classes.delete} onClick={handleDeleteRoutine}>
          <DeleteIcon fontSize="small" color="secondary" />
        </IconButton>
      </Tooltip>

      <Typography variant="h4" gutterBottom>
        {routine.name}
      </Typography>
      <div>
        {routine.exercises.map((exercise) =>
          getRoutineInfo(exercise, routine.name),
        )}
      </div>
    </Widget>
  );
};

RoutineBox.propTypes = {
  routine: propTypes.object,
};

export default RoutineBox;
