import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import propTypes from 'prop-types';

import Widget from '../widget/Widget';
import styles from './styles';

const RoutineBox = ({ routine }) => {
  const classes = styles();

  return (
    <Widget dimensions={{ xs: 12, sm: 6, md: 4 }}>
      <Typography variant="h4">{routine.routine}</Typography>
    </Widget>
  );
};

RoutineBox.propTypes = {
  routine: propTypes.object,
};

export default RoutineBox;
