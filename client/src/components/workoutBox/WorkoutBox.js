import React from 'react';
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from '@material-ui/core';
import propTypes from 'prop-types';
import moment from 'moment';

import Widget from '../widget/Widget';
import styles from './styles';

const WorkoutBox = ({ workout }) => {
  const classes = styles();

  return (
    <Widget dimensions={{ xs: 12, sm: 6, md: 4 }}>
      <Typography gutterBottom className={classes.date}>
        {moment(workout.epoch).format('DD. MMMM YYYY')}
      </Typography>
      <Typography variant="h4">{workout.routine}</Typography>
      <Typography className={classes.duration} gutterBottom>
        {moment(workout.duration).format('hh:mm:ss')}
      </Typography>
      {workout.exercises.map((item) => (
        <Grid container key={item.exercise}>
          <Grid item xs={12}>
            <Typography className={classes.exercise}>
              {item.exercise}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box mb={2}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Satz</TableCell>
                    <TableCell>Gewicht</TableCell>
                    <TableCell>Wdh.</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {item.workload.map((workload, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{workload.weight} Kg</TableCell>
                      <TableCell>{workload.reps}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Widget>
  );
};

WorkoutBox.propTypes = {
  workout: propTypes.object,
};

export default WorkoutBox;
