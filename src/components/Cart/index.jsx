import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import Button from '~/components/Button';
import ProductCard from '~/components/Cards/Products';
import api from '~/services/api';
import formatReal from '~/utils/formatReal';

import {
  Container,
  Content,
  ProductsContainer,
  ValueContainer,
  EmplyBag,
  EstablishmentName,
  ProductContainer,
} from './styles';

function Cart() {
  const { products: bag } = useSelector((state) => state.bag);
  const [loading, setLoading] = useState(false);
  /*   const [bundledProducts, setBundledProducts] = useState([]); */

  const frete = 790;

  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  const getTotal = () => {
    const amount = bag.reduce((acc, item) => {
      const productPricing = item.product.pricing;

      const totalProduct = productPricing * item.quantity;
      acc += totalProduct;

      return acc;
    }, 0);

    return amount;
  };

  if (bag.length < 1)
    return (
      <EmplyBag>
        <span>
          <FiShoppingCart size={30} />
          Não há produtos no carrinho
        </span>
      </EmplyBag>
    );

  return (
    <Container>
      <Content>
        <ProductsContainer>
          <Grid container spacing={4}>
            {bag.length > 0 &&
              bag.map((element) => (
                <Grid item xs={12} key={element.product._id}>
                  <ProductContainer>
                    <EstablishmentName>Razzo Pizza</EstablishmentName>
                    <ProductCard
                      data={element.product}
                      quantity={element.quantity}
                      cart
                    />
                  </ProductContainer>
                </Grid>
              ))}
          </Grid>
        </ProductsContainer>
        <ValueContainer>
          <span>
            <p>Subtotal</p>
            <p>R$ {formatReal(getTotal())}</p>
          </span>
          <span>
            <p>Entrega</p>
            <p>R$ {formatReal(frete)}</p>
          </span>
          <span>
            <p>Total</p>
            <p>R$ {formatReal(getTotal() + frete)}</p>
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
