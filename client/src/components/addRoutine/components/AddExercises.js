import React, { useState, Fragment } from 'react';
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
import styles from './styles';

import useContext from '../../../hooks/useContext';

const AddExercises = ({ onSelectExercises }) => {
  const context = useContext()[0];
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const classes = styles();

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

  const handleListItemClick = (exercise) => {
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

  const handleAddExercise = () => {
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
      <Popover isOpen={isOpen} anchorEl={anchorEl} onClose={handleClosePopup}>
        <List className={classes.exerciseList}>
          {context.exercises.map((exercise) => (
            <Fragment key={exercise.name}>
              <ListItem
                className={`${classes.exerciseListItem} ${
                  isSelectedListItem(exercise.name) &&
                  classes.exerciseListItemActive
                }`}
                onClick={() => handleListItemClick(exercise)}
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
              <IconButton onClick={handleAddExercise}>
                <DoneAll color="secondary" />
              </IconButton>
            </Tooltip>
          </Paper>
        )}
      </Popover>
    </Grid>
  );
};

AddExercises.propTypes = {
  onSelectExercises: propTypes.func,
};

export default AddExercises;
