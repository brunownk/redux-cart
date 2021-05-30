import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Loader from 'react-loader-spinner';
import { useLocation } from 'react-router';

import EstablishmentCard from '~/components/Cards/Establishment';
import ProductCard from '~/components/Cards/Products';
import Pagination from '~/components/Pagination';
import api from '~/services/api';

import { Container } from './styles';

function Establishment(page) {
  const [business, setBusiness] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { pathname } = useLocation();
  const [, , , id] = pathname.split('/');

  async function fetchData(id) {
    setLoading(true);

    const { data: businessData } = await api.get(`business/${id}`);
    setBusiness(businessData);

    const { data: productsData } = await api.get(`/product/business/${id}`);
    setProducts(productsData.data);

    setLoading(false);
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <Container>
      {loading ? (
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      ) : (
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
      )}

      <Pagination numbPages={1} />
    </Container>
  );
}

export default Establishment;
