import React, { useState } from 'react';

import Button from '~/components/Button';

import {
  Container,
  Content,
  ProductsContainer,
  ValueContainer,
} from './styles';

function Cart() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }
  return (
    <Container>
      <Content>
        <ProductsContainer />
        <ValueContainer>
          <span>
            <p>Subtotal</p>
            <p>R$204,32</p>
          </span>
          <span>
            <p>Entrega</p>
            <p>R$7,90</p>
          </span>
          <span>
            <p>Total</p>
            <p>R$212,22</p>
          </span>
        </ValueContainer>
      </Content>
      <Button
        label="Continuar comprando"
        fullWidth
        color="primary"
        onClick={handleClick}
        loading={loading}
      />
      <Button
        label="Confirmar a compra"
        fullWidth
        color="secondary"
        onClick={handleClick}
        loading={loading}
      />
    </Container>
  );
}

export default Cart;
