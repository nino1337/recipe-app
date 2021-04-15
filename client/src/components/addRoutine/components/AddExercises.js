import React, { useState, useEffect, Fragment } from 'react';
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

const AddExercises = ({ onSelectExercises }) => {
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

  const handleClosePopup = () => {
    setSelectedExercises([]);
    setAnchorEl(null);
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

  const handleAddExerciseClick = () => {
    setAnchorEl(null);
    onSelectExercises(selectedExercises);
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
        <Popover isOpen={isOpen} anchorEl={anchorEl} onClose={handleClosePopup}>
          <List className={classes.exerciseList}>
            {fetchedExercises.map((exercise) => (
              <Fragment key={exercise.name}>
                <ListItem
                  className={`${classes.exerciseListItem} ${
                    isSelectedListItem(exercise.name) &&
                    classes.exerciseListItemActive
                  }`}
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
              </Fragment>
            ))}
          </List>
          {selectedExercises.length >= 1 && (
            <Paper className={classes.controls}>
              <Tooltip title="Abbrechen">
                <IconButton onClick={handleClosePopup}>
                  <Close color="error" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Übungen hinzufügen">
                <IconButton onClick={handleAddExerciseClick}>
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
};

export default AddExercises;
