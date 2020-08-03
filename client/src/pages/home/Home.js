import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';

import WorkoutBox from '../../components/workoutBox/WorkoutBox';
import workouts from '../../dummyData/home/workouts';

import Chart from '../../components/chart/Chart';
import exercisePlots from '../../dummyData/home/exercisePlots';
import exercisePlotsStagnation from '../../dummyData/home/exercisePlotsStagnation';

const Home = () => {
  return (
    <article>
      <Typography variant="h4">Deine letzten drei Workouts</Typography>
      <Box mt={2} mb={3}>
        <Grid container spacing={3}>
          {workouts.map((workout, index) => (
            <WorkoutBox workout={workout} key={index} />
          ))}
        </Grid>
      </Box>
      <Typography variant="h4">Übungen mit Progression</Typography>
      <Box mt={2} mb={3}>
        <Grid container spacing={3}>
          {exercisePlots.map((plot) => (
            <Chart key={plot.title} plot={plot} />
          ))}
        </Grid>
      </Box>
      <Typography variant="h4">Übungen mit Stagnierung</Typography>
      <Box mt={2}>
        <Grid container spacing={3}>
          {exercisePlotsStagnation.map((plot) => (
            <Chart key={plot.title} plot={plot} />
          ))}
        </Grid>
      </Box>
    </article>
  );
};

export default Home;
