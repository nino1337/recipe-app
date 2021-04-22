import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';

import WorkoutBox from '../../components/workoutBox/WorkoutBox';
import useContext from '../../hooks/useContext';

const Home = () => {
  const context = useContext()[0];
  return (
    <article>
      <Typography variant="h5">Meine letzten Workouts</Typography>
      <Box mt={2} mb={3}>
        <Grid container spacing={3}>
          {context.workouts.map((workout, index) => (
            <WorkoutBox workout={workout} key={index} />
          ))}
        </Grid>
      </Box>
    </article>
  );
};

export default Home;
