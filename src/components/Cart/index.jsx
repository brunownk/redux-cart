import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';

import Button from '~/components/Button';
import ProductCard from '~/components/Cards/Products';
import formatReal from '~/utils/formatReal';

import {
  Container,
  Content,
  ProductsContainer,
  ValueContainer,
} from './styles';

function Cart() {
  const bag = useSelector((state) => state.bag);
  const [loading, setLoading] = useState(false);

  const frete = 790;

  /*   function subTotal() {
    let amount = bag.reduce((acc, element) => )
  }
 */
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }
  return (
    <Container>
      <Content>
        <ProductsContainer>
          <Grid container spacing={4}>
            {bag.length > 0 &&
              bag.map((element) => (
                <Grid item xs={12}>
                  <ProductCard data={element} cart />
                </Grid>
              ))}
          </Grid>
        </ProductsContainer>
        <ValueContainer>
          <span>
            <p>Subtotal</p>
            <p>R$204,32</p>
          </span>
          <span>
            <p>Entrega</p>
            <p>R$ {formatReal(frete)}</p>
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
