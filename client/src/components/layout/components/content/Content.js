import React from 'react';
import propTypes from 'prop-types';
import styles from './styles';

const Content = ({ children }) => {
  const classes = styles();
  return <main className={classes.root}>{children}</main>;
};

Content.propTypes = {
  children: propTypes.object,
};

export default Content;
