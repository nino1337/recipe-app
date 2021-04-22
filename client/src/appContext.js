import React from 'react';

const AppContext = React.createContext();

export const defaultContext = {
  exercises: null,
  routines: null,
};

export default AppContext;
