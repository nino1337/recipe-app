import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Button, Grid, Box, Typography } from '@material-ui/core';

import AddExercises from './AddExercises';

const AddRoutineForm = ({ onAbortButtonClick }) => {
  const [exercises, setExercises] = useState(false);

  return (
    <Grid container>
      {exercises ? exercises.map((exercise) => {}) : <AddExercises />}
      {exercises && (
        <Grid item container xs={12} justify="center">
          <Box mb={2}>
            <Button color="primary">Routine hinzufügen</Button>
          </Box>
        </Grid>
      )}
      <Grid item container xs={12} justify="center">
        <Button onClick={onAbortButtonClick}>
          <Typography color="error">Abbrechen</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

AddRoutineForm.propTypes = {
  onAbortButtonClick: propTypes.func,
};

export default AddRoutineForm;
