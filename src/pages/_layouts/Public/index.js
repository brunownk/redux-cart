import React from 'react';

import PropTypes from 'prop-types';

import Cart from '~/components/Cart';
import Menu from '~/components/Menu';
import PageLinks from '~/components/PageLinks';

import { Container, Content } from './styles';

const Public = ({ children }) => (
  <Container>
    <Menu />
    <PageLinks />
    <Content>
      {children}
      <Cart />
    </Content>
  </Container>
);
Public.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Public;
