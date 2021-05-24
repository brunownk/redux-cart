import styled from 'styled-components';

import { Colors } from '~/styles/defaults';

import {
  Container as ProductContainer,
  ProductInfo as Info,
  Title as ProductTitle,
  Select as ProductSelect,
} from '../styles';

export const Container = styled(ProductContainer)`
  flex-direction: column;

  padding: 16px 0 6.5px 0;

  border: 1px solid ${Colors.card_border};
  border-radius: 7px;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductInfo = styled(Info)`
  align-items: center;
`;

export const Title = styled(ProductTitle)`
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 14px;

  & + p {
    margin-top: 4px;
  }
`;

export const Price = styled.p`
  font-size: 16px;
  line-height: 23px;
  color: ${Colors.green};

  margin: 9px 0 15.5px 0 !important;
`;

export const Select = styled(ProductSelect)`
  flex-direction: row;
  height: 40px;
  width: 104px;

  @media (min-width: 989px) {
    flex-direction: row;
    height: 40px;
    width: 104px;
  }
`;
