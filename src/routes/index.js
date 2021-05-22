import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import Establishment from '../pages/Dashboard/Establishment';
import Home from '../pages/Dashboard/Home';
import NotFound from '../pages/NotFound';
import AuthRoute from './AuthRoute';
import PublicRoute from './PublicRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={Home} exact />
        <PublicRoute path="/business/:id" component={Establishment} />

        <AuthRoute path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
