import React from 'react';
import propTypes from 'prop-types';
import { Container } from '@material-ui/core';
import styles from './styles';

const Content = ({ children }) => {
  const classes = styles();
  return (
    <main className={classes.root}>
      <Container>{children}</Container>
    </main>
  );
};

Content.propTypes = {
  children: propTypes.object,
};

export default Content;
