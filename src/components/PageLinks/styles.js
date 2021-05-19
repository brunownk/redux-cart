import styled from 'styled-components';

import { Colors } from '~/styles/defaults';

export const Container = styled.nav`
  height: 79px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 25px;

  a {
    color: ${Colors.aux};

    &:hover {
      transform: translate(0, -3px);
    }
  }

  svg {
    color: ${Colors.aux};
  }

  span {
    display: flex;
    align-items: center;
    position: absolute;
    right: 50px;

    svg {
      margin: 0 16.33px 0 17.33px;
    }

    a {
      font-size: 16px;
      line-height: 23px;

      &:last-child {
        color: ${Colors.links};
        font-weight: 500;
      }
    }
  }
`;
