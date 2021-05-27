import React from 'react';

import formatReal from "~/utils/formatReal";
import { useSelector } from 'react-redux';

import defaultImg from '~/assets/svg/pizza.svg';

import {
  Container,
  Info,
  ProductContent,
  Title,
  Description,
  Price,
  Select,
} from './styles';

import {ProductContainer, LogoImg, Options} from '../styles';

const Product = ({ data, addProduct, removeProduct }) => {
  const { products: bag } = useSelector((state) => state.bag);

  const quantity = bag.find(element => element.product._id === data._id )?.quantity


  return (
    <Container>
      <ProductContainer>
        <ProductContent>
          <LogoImg src={data?.imgs[0]?.url || defaultImg} alt="Product" />

          <Info>
            <Title>{data?.name || "Pizza picanha com cheddar"}</Title>
            <Description>{data?.description}</Description>
            <Description>Tempo de preparo: 55min</Description>
            <Price>R$ {formatReal(data?.pricing) || '0'}</Price>
          </Info>
        </ProductContent>
      </ProductContainer>

      <Options>
        <Select>
          <button type="button" onClick={() => removeProduct(quantity)}>
            -
          </button>
          <p>{quantity || 0}</p>
          <button type="button" onClick={() => addProduct(quantity)}>
            +
          </button>
        </Select>
      </Options>
    </Container>
  );
};

export default Product;