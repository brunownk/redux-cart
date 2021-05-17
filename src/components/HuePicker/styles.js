import styled, { css } from 'styled-components';

import { Colors } from '~/styles/defaults';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
`;

export const Preview = styled.div`
  height: 16px;
  width: 16px;

  margin-left: 15px;

  border-radius: 2px;

  background-color: ${({ color }) => `${color}`};
`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 110%;
  font-weight: 500;
  margin-bottom: 5px;

  ${({ color }) => {
    if (color === 'black')
      return css`
        color: '#000000';
      `;

    return css`
      color: ${color};
    `;
  }}
`;

export const Error = styled.span`
  color: ${Colors.error};
  font-size: 12px;
`;
