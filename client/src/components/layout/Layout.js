import React, { useState } from 'react';
import propTypes from 'prop-types';

import Content from './components/content/Content';
import Drawer from './components/drawer/Drawer';
import Header from './components/header/Header';

const Layout = ({ children, user }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const onBurgerClick = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

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
      <Content>{children}</Content>
    </>
  );
};

Layout.propTypes = {
  user: propTypes.string,
  children: propTypes.object,
};

export default Layout;
