import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import {
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Paper,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import { Check, DoneAll, Close } from '@material-ui/icons';

import Popover from '../../popover/Popover';
import workoutService from '../../../service/workoutService';
import styles from './styles';

const AddExercises = ({ onSelectExercises, addedExercises = [] }) => {
  const [fetchedExercises, setFetchedExercises] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const classes = styles();

  useEffect(() => {
    const fetchExercises = async () => {
      const { response } = await workoutService.getExercises();

      setFetchedExercises(response.data);
    };

    fetchExercises();
  }, []);

  const handlePopupButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isSelectedListItem = (exerciseName) => {
    return Boolean(
      selectedExercises.find((exercise) => exercise.name === exerciseName),
    );
  };

  const onListItemClick = (exercise) => {
    if (isSelectedListItem(exercise.name)) {
      setSelectedExercises((prevSelectedExercises) =>
        prevSelectedExercises.filter(
          (selectedExercise) => selectedExercise.name !== exercise.name,
        ),
      );
    } else {
      setSelectedExercises((prevSelectedExercises) => [
        ...prevSelectedExercises,
        exercise,
      ]);
    }
  };

  return (
    <Grid item container xs={12} justify="center">
      <Box mb={2}>
        <Button
          color="primary"
          variant="contained"
          onClick={handlePopupButtonClick}
        >
          Übungen hinzufügen
        </Button>
      </Box>
      {fetchedExercises && (
        <Popover isOpen={isOpen} anchorEl={anchorEl}>
          <List className={classes.exerciseList}>
            {fetchedExercises.map((exercise) => (
              <>
                <ListItem
                  key={exercise.name}
                  className={`${classes.exerciseListItem} ${
                    isSelectedListItem(exercise.name) &&
                    classes.exerciseListItemActive
                  }`}
                  isSelected={isSelectedListItem(exercise.name)}
                  onClick={() => onListItemClick(exercise)}
                >
                  <ListItemAvatar>
                    <img
                      className={classes.exerciseImage}
                      src={exercise.image}
                      alt={exercise.name}
                    />
                  </ListItemAvatar>
                  <ListItemText>{exercise.name}</ListItemText>
                  <Check
                    color="secondary"
                    className={`${classes.exerciseCheck} ${
                      isSelectedListItem(exercise.name) &&
                      classes.exerciseCheckActive
                    }`}
                  />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
          {selectedExercises.length >= 1 && (
            <Paper className={classes.controls}>
              <Tooltip title="Abbrechen">
                <IconButton>
                  <Close color="error" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Übungen hinzufügen">
                <IconButton>
                  <DoneAll color="secondary" />
                </IconButton>
              </Tooltip>
            </Paper>
          )}
        </Popover>
      )}
    </Grid>
  );
};

AddExercises.propTypes = {
  onSelectExercises: propTypes.func,
  addedExercises: propTypes.array,
};

export default AddExercises;
