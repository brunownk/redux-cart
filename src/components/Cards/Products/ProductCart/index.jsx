import React from 'react';

import formatReal from "~/utils/formatReal";
import { FiTrash2 } from 'react-icons/fi';

import defaultImg from '~/assets/svg/pizza.svg';

import {
  Container,
  EstablishmentName,
  Content,
  Info,
  Title,
  Price,
  Select,
  Category,
  RemoveButton,
} from './styles';

import {ProductContainer, LogoImg, Options} from '../styles';


const ProductCart = ({ data, removeProduct, addProduct, countproduct }) => {
  return (
    <Container>
      <ProductContainer>
        <EstablishmentName>RodaPizza</EstablishmentName>

        <Content>
          <LogoImg src={data?.imgs[0]?.url || defaultImg} alt="Product" />

          <Info>
            <Title >{data?.name || "Pizza picanha com cheddar"}</Title>
            <Category>Pizza</Category>
            <Price >R$ {formatReal(data?.pricing) || '0'}</Price>
          </Info>
        </Content>
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
          <RemoveButton onClick={() => console.log('remover')}>
            <FiTrash2 size={20} />
          </RemoveButton>
      </Options>
    </Container>
  );
};

export default ProductCart;