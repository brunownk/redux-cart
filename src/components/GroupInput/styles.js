import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-rows: ${({ rows }) => {
    if (Array.isArray(rows)) return rows.join(' ');

    return rows;
  }};

  grid-template-columns: ${({ columns }) => {
    if (Array.isArray(columns)) return columns.join(' ');

    return columns;
  }};

  grid-gap: ${({ gap }) => gap}px;
`;
