import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';

import Loading from '../../components/loading/Loading';
import workoutService from '../../service/workoutService';
import WorkoutBox from '../../components/workoutBox/WorkoutBox';

const Home = () => {
  const [workouts, setWorkouts] = useState({
    data: null,
    error: false,
    loading: false,
  });

  useEffect(() => {
    const fetchWorkoutData = async () => {
      setWorkouts({
        data: null,
        error: false,
        loading: true,
      });

      const { response, errorMessage } = await workoutService.getWorkouts();

      if (errorMessage) {
        setWorkouts({
          data: null,
          error: true,
          loading: false,
        });
      } else {
        setWorkouts({
          data: response.data,
          loading: false,
          error: false,
        });
      }
    };

    fetchWorkoutData();
  }, []);

  return (
    <article>
      <Typography variant="h5">Meine letzten Workouts</Typography>
      <Box mt={2} mb={3}>
        <Grid container spacing={3}>
          {workouts.loading && <Loading />}
          {workouts.data &&
            workouts.data.map((workout, index) => (
              <WorkoutBox workout={workout} key={index} />
            ))}
          {workouts.error && (
            <Typography>
              Beim Laden deiner Workouts ist ein Fehler aufgetreten.
            </Typography>
          )}
        </Grid>
      </Box>
    </article>
  );
};

export default Home;
