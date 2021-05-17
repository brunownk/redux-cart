import React from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Private from '~/pages/_layouts/Private';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Private>
            <Component {...props} />
          </Private>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
