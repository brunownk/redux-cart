import styled from 'styled-components';

import { Colors } from '~/styles/defaults';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;

  button {
    height: 51px;

    & + button {
      margin-top: 8px;
    }
  }
`;

export const Content = styled.div`
  width: 423px;
  min-height: 633px;

  margin-bottom: 35px;
  background-color: ${Colors.card_background};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductsContainer = styled.div`
  padding: 26px 0;
`;

export const ValueContainer = styled.div`
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
      margin-bottom: 32px;

      p {
        &:nth-child(1) {
          padding-top: 20px;
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
        padding-left: 25px;
        margin-bottom: 12px;
      }

      &:nth-child(2) {
        color: #282828;
        font-weight: 500;
        padding-right: 8px;
      }
    }
  }
`;
