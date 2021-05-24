import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

import { Colors } from '~/styles/defaults';

export const Container = styled.div`
  width: 100%;
  height: 96px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 50px;

  background-color: ${Colors.menu_background};

  > div {
    display: flex;
    margin-left: 16px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 16px;

      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: ${Colors.white};

      img {
        width: 21.33px;
        height: 19.13px;
      }
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  margin-right: 32px;

  a + a {
    margin-left: 5px;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Logo = styled(RouterLink)`
  display: flex;
  align-items: center;
  margin-right: 150px;

  img {
    width: auto;
    height: 30px;
  }

  @media (max-width: 600px) {
    margin-right: 32px;
  }
`;

export const IconCart = styled(RouterLink)`
  margin: 0;
`;

export const OpitionsProfile = styled.div`
  display: none;
  align-items: center;
  cursor: pointer;

  @media (min-width: 980px) {
    display: flex;
    position: relative;
  }

  svg {
    margin-left: 10px;
    color: ${Colors.aux};
  }
`;
