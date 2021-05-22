import React from 'react';

import Pagination from '@material-ui/lab/Pagination';
import PropTypes from 'prop-types';

import { Container } from './styles';

function PaginationComponent({ numbPages }) {
  return (
    <Container>
      <Pagination count={numbPages} variant="outlined" shape="rounded" />
    </Container>
  );
}

export default PaginationComponent;

PaginationComponent.propTypes = {
  numbPages: PropTypes.number.isRequired,
};
