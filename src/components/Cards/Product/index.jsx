import React, { useCallback, useState } from 'react';

import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';

import defaultImg from '~/assets/svg/pizza.svg';

import {
  Container,
  LogoImg,
  EstablishmentName,
  Description,
  Title,
  Price,
  Select,
  Category,
  RemoveButton,
  ProductContent,
  ProductContainer,
  ProductInfo,
  Options,
} from './styles';

const Card = ({ cart }) => {
  const [countproduct, setCountProduct] = useState(0);

  const addProduct = useCallback(() => {
    setCountProduct(countproduct + 1);
  }, [countproduct]);

  const removeProduct = useCallback(() => {
    if (
      countproduct === 0
        ? setCountProduct(0)
        : setCountProduct(countproduct - 1)
    );
  }, [countproduct]);
  return (
    <Container type={cart}>
      <ProductContainer>
        {cart ? <EstablishmentName>RodaPizza</EstablishmentName> : null}

        <ProductContent type={cart}>
          <LogoImg src={defaultImg} alt="Product" />

          <ProductInfo type={cart}>
            <Title type={cart}>Pizza picanha com cheddar</Title>

            {cart ? <Category>Pizza</Category> : null}

            {!cart ? (
              <>
                <Description>Picanha + Cheddar + Borda de Catupiry</Description>
                <Description>Tempo de preparo: 55min</Description>
              </>
            ) : null}

            <Price type={cart}>R$ 67,90</Price>
          </ProductInfo>
        </ProductContent>
      </ProductContainer>

      <Options>
        <Select type={cart}>
          <button type="button" onClick={removeProduct}>
            -
          </button>
          <p>{countproduct}</p>
          <button type="button" onClick={addProduct}>
            +
          </button>
        </Select>

        {cart ? (
          <RemoveButton onClick={() => console.log('remover')}>
            <FiTrash2 size={20} />
          </RemoveButton>
        ) : null}
      </Options>
    </Container>
  );
};

export default Card;

Card.defaultProps = {
  cart: false,
};

Card.propTypes = {
  cart: PropTypes.bool,
};
