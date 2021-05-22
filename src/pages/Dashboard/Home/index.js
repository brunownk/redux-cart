import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import Card from '~/components/Cards/Establishment';
import InputSearch from '~/components/InputSearch';
import Pagination from '~/components/Pagination';
import api from '~/services/api';

import { Container } from './styles';

function Home() {
  const [business, setBusiness] = useState([]);

  async function fetchEstablishments() {
    const { data } = await api.get('/business');

    setBusiness(data.data);
  }

  useEffect(() => {
    fetchEstablishments();
  }, []);
  return (
    <Container>
      <InputSearch
        maxWidth={303}
        name="search"
        placeholder="Busque por um produto"
        margin={34}
      />

      <Grid container spacing={3}>
        {business.length > 0 &&
          business.map((b) => (
            <Grid key={b.name} item xs={12} md={6} lg={4} xl={3}>
              <Link to={`/products/business/${b._id}`}>
                <Card data={b} />
              </Link>
            </Grid>
          ))}
      </Grid>

      <Pagination numbPages={2} />
    </Container>
  );
}

export default Home;
