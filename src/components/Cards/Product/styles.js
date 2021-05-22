import styled, { css } from 'styled-components';

import { Colors } from '~/styles/defaults';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ type }) => {
    if (!type) {
      return css`
        flex-direction: column;

        padding: 16px 0 6.5px 0;

        border: 1px solid ${Colors.card_border};
        border-radius: 7px;
      `;
    }

    return css`
      flex-direction: row;
      padding: 0 14.62px 0 16px;
    `;
  }}
`;

export const EstablishmentName = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;

  margin-bottom: 8px;

  color: ${Colors.links};
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductContent = styled.div`
  display: flex;

  ${({ type }) => {
    if (!type) {
      return css`
        flex-direction: column;
        align-items: center;
      `;
    }

    return css`
      flex-direction: row;
    `;
  }}
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

  ${({ type }) => {
    if (!type) {
      return css`
        align-items: center;
      `;
    }

    return css`
      margin-left: 14px;
    `;
  }}
`;

export const Title = styled.h1`
  font-size: 14px;
  line-height: 16px;
  color: #6d5d7a;

  ${({ type }) => {
    if (!type) {
      return css`
        margin-bottom: 16px;
      `;
    }

    return css`
      margin-bottom: 4px;
    `;
  }}
`;

export const Category = styled.h2`
  font-size: 12px;
  line-height: 17px;
  color: #282828;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 14px;

  & + p {
    margin-top: 4px;
  }
`;

export const Price = styled.p`
  ${({ type }) => {
    if (!type) {
      return css`
        font-size: 16px;
        line-height: 23px;
        color: ${Colors.green};

        margin: 9px 0 15.5px 0 !important;
      `;
    }

    return css`
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: ${Colors.green};
    `;
  }}
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  background: ${Colors.links};

  ${({ type }) => {
    if (!type) {
      return css`
        flex-direction: row;
        height: 40px;
        width: 104px;

        @media (min-width: 989px) {
          flex-direction: row;
          height: 40px;
          width: 104px;
        }
      `;
    }

    return css`
      margin-right: 15.59px;
      height: 119px;
      width: 40px;
    `;
  }}

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

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: #d0c9d6;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
