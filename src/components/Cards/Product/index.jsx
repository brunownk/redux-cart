import React, { useCallback, useState } from 'react';

import formatReal from "~/utils/formatReal";
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

const Card = ({ cart, data }) => {
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
    <Container cart={cart}>
      <ProductContainer>
        {cart ? <EstablishmentName>RodaPizza</EstablishmentName> : null}

        <ProductContent cart={cart}>
          <LogoImg src={data?.imgs[0]?.url || defaultImg} alt="Product" />

          <ProductInfo cart={cart}>
            <Title cart={cart}>{data?.name || "Pizza picanha com cheddar"}</Title>

            {cart ? <Category>Pizza</Category> : null}

            {!cart ? (
              <>
                <Description>{data?.description}</Description>
                <Description>Tempo de preparo: 55min</Description>
              </>
            ) : null}

            <Price cart={cart}>R$ {formatReal(data?.pricing) || '0'}</Price>
          </ProductInfo>
        </ProductContent>
      </ProductContainer>

      <Options>
        <Select cart={cart}>
          <button cart="button" onClick={removeProduct}>
            -
          </button>
          <p>{countproduct}</p>
          <button cart="button" onClick={addProduct}>
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
