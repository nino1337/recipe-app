import React from 'react';

import LoadingIcon from './assets/gym.svg';
import styles from './styles';

const Loading = () => {
  const classes = styles();
  return (
    <img
      className={classes.root}
      src={LoadingIcon}
      alt="dumbbell loading indicator"
    />
  );
};

export default Loading;
