import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import Card from '~/components/Cards/Establishment';
import InputSearch from '~/components/InputSearch';
import Pagination from '~/components/Pagination';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <InputSearch
        maxWidth={303}
        name="search"
        placeholder="Busque por um produto"
        margin={34}
      />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Link to="/business/1">
            <Card />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Link to="/business/1">
            <Card />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Link to="/business/1">
            <Card />
          </Link>
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Link to="/business/1">
            <Card />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Link to="/business/1">
            <Card />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Link to="/business/1">
            <Card />
          </Link>
        </Grid>

        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Link to="/business/1">
            <Card />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Link to="/business/1">
            <Card />
          </Link>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <Link to="/business/1">
            <Card />
          </Link>
        </Grid>
      </Grid>

      <Pagination numbPages={2} />
    </Container>
  );
}

export default Home;
