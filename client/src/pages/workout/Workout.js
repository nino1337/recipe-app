import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';

import LogWorkout from '../../components/logWorkout/LogWorkout';
import RoutineBox from '../../components/routineBox/RoutineBox';
import AddRoutine from '../../components/addRoutine/AddRoutine';

import useContext from '../../hooks/useContext';

const Workout = () => {
  const context = useContext()[0];

  return (
    <article>
      <Typography variant="h5" color="primary" gutterBottom>
        Abgeschlossenes Workout hinzufügen
      </Typography>
      <LogWorkout />
      <Grid container alignItems="center">
        <Typography variant="h5" color="primary">
          Meine Routinen
        </Typography>
        <AddRoutine />
      </Grid>
      <Box mt={2} mb={3}>
        <Grid container spacing={3}>
          {context.routines.map((routine) => (
            <RoutineBox key={routine.name} routine={routine} />
          ))}
        </Grid>
      </Box>
    </article>
  );
};

export default Workout;
