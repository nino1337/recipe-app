import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Loading from './components/loading/Loading';
import { userRoutes, loginRegisterRoutes } from './routes';
import userService from './service/userService';

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(process.env.REACT_APP_MOCKS ? 'Nino' : null);
  const history = useHistory();

  useEffect(() => {
    const onLogin = async () => {
      setLoading(true);
      const { error, response } = await userService.currentUser();

      if (!error) {
        setUser(response.data.username);
        if (history.location.pathname === '/login') {
          history.push('/');
        }
      }

      // show loading spinner at least 1 second
      setTimeout(() => setLoading(false), 1000);
    };

    window.addEventListener('userloggedin', onLogin);

    /**
     * if the client already has an access_token in localstorage, immediately try to fetch the user by dispatching the login event
     */
    if (window.localStorage.getItem('access_token')) {
      window.dispatchEvent(new CustomEvent('userloggedin'));
    }

    return () => window.removeEventListener('userloggedin', onLogin);
  }, []);

  const getRoute = (route) => (
    <Route
      exact
      key={route.href}
      path={route.href}
      component={route.component}
    />
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout user={user}>
      <Switch>
        {user
          ? userRoutes.map((route) => getRoute(route))
          : loginRegisterRoutes.map((route) => getRoute(route))}
      </Switch>
    </Layout>
  );
}

export default App;
