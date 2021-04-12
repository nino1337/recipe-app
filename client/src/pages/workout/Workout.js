import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';

import workoutService from '../../service/workoutService';
import RoutineBox from '../../components/routineBox/RoutineBox';

const Workout = () => {
  const [routines, setRoutines] = useState(null);

  useEffect(() => {
    const fetchRoutinesData = async () => {
      const { response, errorMessage } = await workoutService.getRoutines();

      setRoutines(response.data);
    };
    fetchRoutinesData();
  });

  return (
    <article>
      <Typography variant="h1">Workout</Typography>
      <Box mb={3} mt={1}>
        <Button variant="contained" color="primary">
          Workout starten
        </Button>
      </Box>
      <Typography variant="h3" gutterBottom>
        Meine Routinen
      </Typography>
      <Button variant="contained" color="primary">
        Routine hinzufügen
      </Button>
      <Box mt={2} mb={3}>
        <Grid container spacing={3}>
          {routines &&
            routines.map((routine) => (
              <RoutineBox key={routine.id} routine={routine} />
            ))}
        </Grid>
      </Box>
    </article>
  );
};

export default Workout;
