import React from 'react';

import formatReal from "~/utils/formatReal";

import defaultImg from '~/assets/svg/pizza.svg';

import {
  Container,
  ProductInfo,
  ProductContent,
  Title,
  Description,
  Price,
  Select,
} from './styles';

import {ProductContainer, LogoImg, Options} from '../styles';

const Product = ({ data, addProduct, removeProduct, countproduct }) => {
  return (
    <Container>
      <ProductContainer>
        <ProductContent>
          <LogoImg src={data?.imgs[0]?.url || defaultImg} alt="Product" />

          <ProductInfo>
            <Title>{data?.name || "Pizza picanha com cheddar"}</Title>
            <Description>{data?.description}</Description>
            <Description>Tempo de preparo: 55min</Description>
            <Price>R$ {formatReal(data?.pricing) || '0'}</Price>
          </ProductInfo>
        </ProductContent>
      </ProductContainer>

      <Options>
        <Select>
          <button type="button" onClick={removeProduct}>
            -
          </button>
          <p>{countproduct}</p>
          <button type="button" onClick={addProduct}>
            +
          </button>
        </Select>
      </Options>
    </Container>
  );
};

export default Product;