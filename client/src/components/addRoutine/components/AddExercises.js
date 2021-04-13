import React, { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';

import Popover from '../../popover/Popover';
import workoutService from '../../../service/workoutService';

const AddExercises = () => {
  const [fetchedExercises, setFetchedExercises] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  useEffect(() => {
    const fetchExercises = async () => {
      const { response } = await workoutService.getExercises();

      setFetchedExercises(response.data);
    };

    fetchExercises();
  }, []);
  return (
    <Grid item container xs={12} justify="center">
      <Box mb={2}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setIsOpenPopup(true)}
        >
          Übungen hinzufügen
        </Button>
      </Box>
      {fetchedExercises && (
        <Popover isOpen={isOpenPopup}>
          <List>
            {fetchedExercises.map((exercise) => (
              <ListItem key={exercise.name}>
                <ListItemAvatar>
                  <img src={exercise.image} alt={exercise.name} />
                </ListItemAvatar>
                <ListItemText>{exercise.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Popover>
      )}
    </Grid>
  );
};

export default AddExercises;
