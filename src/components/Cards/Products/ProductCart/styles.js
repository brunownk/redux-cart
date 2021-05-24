import styled from 'styled-components';

import { Colors } from '~/styles/defaults';

import {
  Container as ProductContainer,
  ProductInfo,
  Title as ProductTitle,
  Select as ProductSelect,
} from '../styles';

export const Container = styled(ProductContainer)`
  flex-direction: row;
  padding: 0 14.62px 0 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EstablishmentName = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;

  margin-bottom: 8px;

  color: ${Colors.links};
`;

export const Info = styled(ProductInfo)`
  margin-left: 14px;
`;

export const Title = styled(ProductTitle)`
  margin-bottom: 4px;
`;

export const Category = styled.h2`
  font-size: 12px;
  line-height: 17px;
  color: #282828;
  margin-bottom: 8px;
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${Colors.green};
`;

export const Select = styled(ProductSelect)`
  margin-right: 15.59px;
  height: 119px;
  width: 40px;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: #d0c9d6;
  }
`;
