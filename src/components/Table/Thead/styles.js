import styled from 'styled-components';
import { sizes } from '~/styles/configs/grid';

export const Container = styled.thead`
  @media ${sizes.sm} {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;
