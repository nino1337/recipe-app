import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import propTypes from 'prop-types';

import styles from './styles';

const Widget = ({ children, dimensions, className }) => {
  const classes = styles();
  return (
    <Grid item {...dimensions} className={className}>
      <Paper className={classes.paper}>{children}</Paper>
    </Grid>
  );
};

Widget.propTypes = {
  children: propTypes.array,
  dimensions: propTypes.object,
  className: propTypes.string,
};

export default Widget;
