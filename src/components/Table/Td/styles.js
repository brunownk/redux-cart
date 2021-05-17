import styled from 'styled-components';
import { sizes } from '~/styles/configs/grid';

export const Container = styled.td`
  color: #262626;
  background: #ffffff;
  
  text-align: left;

  padding: 10px;

  @media ${sizes.sm} {
    display: block;

    &:before {
      content: attr(data-label);
      float: left;

      font-weight: 800;

      margin-right: 10px;
      vertical-align: middle;
    }
  }
`;
