import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Public = ({ children }) => 
  <Container>
    {children}
  </Container>;
;

Public.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Public;
