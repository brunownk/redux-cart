import React from 'react';

import PropTypes from 'prop-types';

import { Container, Title } from './styles';

const Breadcrumbs = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

Breadcrumbs.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Breadcrumbs;
