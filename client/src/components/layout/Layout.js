import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import Content from './components/content/Content';
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';

import AppContext, { defaultContext } from '../../appContext';
import workoutService from '../../service/workoutService';

const Layout = ({ children, user }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [context, setContext] = useState(defaultContext);

  const onLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const onBurgerClick = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchContext = async () => {
      const { response: exercises } = await workoutService.getExercises();
      const { response: routines } = await workoutService.getRoutines();
      const { response: workouts } = await workoutService.getWorkouts();

      setContext({
        routines: routines.data,
        exercises: exercises.data,
        workouts: workouts.data,
      });
    };

    fetchContext();
  }, []);

  return (
    <>
      <Header
        user={user}
        onBurgerClick={onBurgerClick}
        isDrawerOpen={isDrawerOpen}
      />
      {user && (
        <Drawer user={user} isOpen={isDrawerOpen} onLinkClick={onLinkClick} />
      )}
      <AppContext.Provider value={[context, setContext]}>
        {context.exercises && context.routines && <Content>{children}</Content>}
      </AppContext.Provider>
    </>
  );
};

Layout.propTypes = {
  user: propTypes.string,
  children: propTypes.object,
};

export default Layout;
