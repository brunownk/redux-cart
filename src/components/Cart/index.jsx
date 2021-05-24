import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';

import Button from '~/components/Button';
import ProductCard from '~/components/Cards/Products';

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
        <ProductsContainer>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <ProductCard cart />
            </Grid>

            <Grid item xs={12}>
              <ProductCard cart />
            </Grid>
          </Grid>
        </ProductsContainer>
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
