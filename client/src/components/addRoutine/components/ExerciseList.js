import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@material-ui/core';

import styles from './styles';
import ExerciseSetsSelect from './ExerciseSetsSelect';

const ExerciseList = ({ exercises, onSetsSelect }) => {
  const classes = styles();

  return (
    <List className={classes.exerciseList}>
      {exercises.map((exercise) => (
        <Fragment key={exercise.name}>
          <ListItem className={classes.exerciseListItem}>
            <ListItemAvatar>
              <img
                className={classes.exerciseImage}
                src={exercise.image}
                alt={exercise.name}
              />
            </ListItemAvatar>
            <ListItemText>{exercise.name}</ListItemText>
            <ExerciseSetsSelect
              onSetsSelect={(event) => onSetsSelect(event, exercise.name)}
              sets={exercise.sets}
            />
          </ListItem>
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

ExerciseList.propTypes = {
  exercises: propTypes.array,
  onSetsSelect: propTypes.func,
};

export default ExerciseList;
