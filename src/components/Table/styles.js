import styled from 'styled-components';
import { sizes } from '~/styles/configs/grid';

export const Container = styled.table`
  border-collapse: collapse;
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 10px;

  @media ${sizes.sm} {
    table-layout: fixed;
    margin: 0;
    border: 0;
  }
`;
