import styled, { css } from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  padding-top: 38px;
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
      color: #73706d;
    }
  }

  ${({ active }) => {
    if (active)
      return css`
        &:after,
        &:before {
          width: 50%;
          background-color: #249cf2;
        }

        a {
          font-size: 14px;
          line-height: 20px;
          font-weight: bold;
          color: #249cf2;
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
  width: 77px;
  height: 20px;

  user-select: none;
  text-decoration: none;

  color: #73706d;
  font-size: 22px;
  font-weight: 400;

  transition: color 200ms linear;
`;
