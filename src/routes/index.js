import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Establishment from '../pages/Establishment';
import NotFound from '../pages/NotFound';
import AuthRoute from './AuthRoute';
import PublicRoute from './PublicRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={Dashboard} exact />
        <PublicRoute path="/business/:id" component={Establishment} />

        <AuthRoute path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
