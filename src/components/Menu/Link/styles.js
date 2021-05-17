import styled, { css } from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  height: 100%;

  :after,
  :before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0px;
    height: 2px;
    background-color: #ffffff;
    transition: width 200ms linear;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }

  &:hover {
    &:after,
    &:before {
      width: 50%;
    }

    a {
      color: #ffffff;
    }
  }

  ${({ active }) => {
    if (active)
      return css`
        &:after,
        &:before {
          width: 50%;
        }

        a {
          color: #ffffff;
        }
      `;

    return css`
      a {
        color: #ffffff;
      }
    `;
  }}
`;

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 30px;

  height: 100%;

  user-select: none;
  text-decoration: none;

  color: #ffffff;
  font-size: 22px;
  font-weight: normal;

  transition: color 200ms linear;

  @media (max-width: 1024px) {
    display: none;
  }
`;
