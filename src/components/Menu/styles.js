import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

import { Colors } from '~/styles/defaults';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 25px;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 96px;

  background-color: ${Colors.menu_background};

  > div {
    display: flex;
    justify-content: flex-end;

    span {
      display: flex;
      align-items: center;
      justify-content: flex-end;

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

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  > a:not(:last-of-type) {
    margin-right: 15px;
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
