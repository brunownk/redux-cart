import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router';

import EstablishmentCard from '~/components/Cards/Establishment';
import ProductCard from '~/components/Cards/Products';
import Pagination from '~/components/Pagination';
import api from '~/services/api';

import { Container } from './styles';

function Establishment(page) {
  const [business, setBusiness] = useState({});
  const [products, setProducts] = useState([]);

  const { pathname } = useLocation();
  const [, , , id] = pathname.split('/');

  async function fetchProducts(businessId) {
    const { data } = await api.get(`/product/business/${businessId}`);

    setProducts(data.data);
  }

  async function fetchEstablishment(businessId) {
    const { data } = await api.get(`business/${businessId}`);

    setBusiness(data);
  }

  useEffect(() => {
    fetchProducts(id);
    fetchEstablishment(id);
  }, [id]);

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <EstablishmentCard data={business} />
        </Grid>

        {products.length > 0 &&
          products.map((product) => (
            <Grid key={product.name} item xs={12} md={6} lg={4} xl={3}>
              <ProductCard data={product} />
            </Grid>
          ))}
      </Grid>
      <Pagination numbPages={1} />
    </Container>
  );
}

export default Establishment;
