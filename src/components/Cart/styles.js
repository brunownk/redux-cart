import styled, { css } from 'styled-components';

import { Colors } from '~/styles/defaults';

export const Container = styled.div`
  width: 423px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    height: 51px;

    & + button {
      margin-top: 8px;
    }
  }

  @media (max-width: 1050px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const EmplyBag = styled.div`
  width: 423px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.card_background};

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      margin-bottom: 5px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-bottom: 35px;
  background-color: ${Colors.card_background};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductsContainer = styled.div`
  padding: 26px 0;
  margin-bottom: 30px;
`;

export const ValueContainer = styled.div`
  padding: 0 8px 33px 25px;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
      p {
        &:nth-child(1) {
          padding-top: 13px;
          color: #282828;
        }

        &:nth-child(2) {
          padding-top: 12px;
          border-top: 1px solid #e5e4e6;
          width: 361px;
          text-align: right;

          color: ${Colors.green};
        }
      }
    }

    p {
      font-size: 16px;
      line-height: 150%;

      &:nth-child(1) {
        color: ${Colors.text};
        margin-bottom: 12px;
      }

      &:nth-child(2) {
        color: #282828;
        font-weight: 500;
      }
    }
  }
`;
