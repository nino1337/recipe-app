import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import propTypes from 'prop-types';

import styles from './styles';

const Widget = ({ children, dimensions }) => {
  const classes = styles();
  return (
    <Grid item {...dimensions}>
      <Paper className={classes.paper}>{children}</Paper>
    </Grid>
  );
};

Widget.propTypes = {
  children: propTypes.array,
  dimensions: propTypes.object,
};

export default Widget;
