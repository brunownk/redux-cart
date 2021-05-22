import React from 'react';

import Grid from '@material-ui/core/Grid';

import EstablishmentCard from '~/components/Cards/Establishment';
import ProductCard from '~/components/Cards/Product';
import Pagination from '~/components/Pagination';

import { Container } from './styles';

function Establishment() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <EstablishmentCard />
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <ProductCard />
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <ProductCard />
        </Grid>
      </Grid>

      <Pagination numbPages={2} />
    </Container>
  );
}

export default Establishment;
