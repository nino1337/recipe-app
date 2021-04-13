import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';

import workoutService from '../../service/workoutService';
import RoutineBox from '../../components/routineBox/RoutineBox';
import AddRoutine from '../../components/addRoutine/AddRoutine';

const Workout = () => {
  const [routines, setRoutines] = useState(null);

  useEffect(() => {
    const fetchRoutinesData = async () => {
      const { response, errorMessage } = await workoutService.getRoutines();

      setRoutines(response.data);
    };
    fetchRoutinesData();
  }, []);

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
