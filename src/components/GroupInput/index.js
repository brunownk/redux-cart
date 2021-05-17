import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

const GroupInput = ({ children, columns, rows, gap }) => {
  return (
    <Container gap={gap} columns={columns} rows={rows}>
      {children}
    </Container>
  );
};

GroupInput.defaultProps = {
  gap: 0,
  rows: '1fr',
  columns: '1fr',
};

GroupInput.propTypes = {
  columns: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  rows: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
  gap: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default GroupInput;
