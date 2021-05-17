import React from 'react';

import PropTypes from 'prop-types';

import Menu from '~/components/Menu';

import { Container, Content } from './styles';

const Private = ({ children }) => {
  return (
    <Container>
      <Menu />
      <Content>{children}</Content>
    </Container>
  );
};

Private.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Private;
