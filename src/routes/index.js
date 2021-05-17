import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';

import ForgotPassword from '~/pages/ForgotPassword';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';
import Profile from '~/pages/Profile';
import RecoverPassword from '~/pages/RecoverPassword';
import ChangePassword from '~/pages/ChangePassword';

import Register from '~/pages/Register';
import Users from '~/pages/Users';
import ManageUsers from '~/pages/Users/Manage';

import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <AuthRoute path="/forgot-password" component={ForgotPassword} />
        <AuthRoute path="/recover-password/:token" component={RecoverPassword} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/change-Password" component={ChangePassword} />

        <PrivateRoute path="/" component={Users} exact />

        <PrivateRoute path="/users" component={Users} exact />
        <PrivateRoute path="/users/:id" component={ManageUsers} exact />

        <AuthRoute path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
