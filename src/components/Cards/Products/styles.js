import styled from 'styled-components';

import { Colors } from '~/styles/defaults';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoImg = styled.img`
  width: 68px;
  height: 67px;
  border-radius: 7px;
  margin-bottom: 8px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 14px;
  line-height: 16px;
  color: #6d5d7a;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  background: ${Colors.links};

  p {
    margin: 0 8px;
    font-size: 16px;
    color: ${Colors.white};
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 24px;
    color: ${Colors.white};
    flex: 1;
    cursor: pointer;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
