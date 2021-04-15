import React from 'react';
import { Typography } from '@material-ui/core';

import propTypes from 'prop-types';

import EditRoutine from './components/EditRoutine';
import Widget from '../widget/Widget';
import styles from './styles';

const RoutineBox = ({ routine }) => {
  const classes = styles();

  return (
    <Widget dimensions={{ xs: 12, sm: 6, md: 4 }} className={classes.root}>
      <EditRoutine classes={classes} />
      <Typography variant="h4" gutterBottom>
        {routine.name}
      </Typography>
      <div>
        {routine.exercises.map((exercise, index) => (
          <Typography key={routine.name + index} className={classes.exercise}>
            {exercise.sets}x {exercise.name}
          </Typography>
        ))}
      </div>
    </Widget>
  );
};

RoutineBox.propTypes = {
  routine: propTypes.object,
};

export default RoutineBox;
