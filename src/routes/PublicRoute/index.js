import React from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Public from '../../pages/_layouts/Public';

const PublicRoute = ({ component: Component, title, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Public name={title}>
        <Component {...props} />
      </Public>
    )}
  />
);

PublicRoute.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
