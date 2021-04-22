import React from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';

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
      <Box mb={4} mt={2}>
        <Button variant="contained" color="primary">
          Workout loggen
        </Button>
      </Box>
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
