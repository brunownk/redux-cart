import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import Card from '~/components/Cards/Establishment';
/* import InputSearch from '~/components/InputSearch'; */
import Pagination from '~/components/Pagination';
import api from '~/services/api';

import { Container, InputSearch, Search } from './styles';

function Home() {
  const [business, setBusiness] = useState([]);

  async function fetchEstablishments(e) {
    const { data } = await api.get(`/business/`, {
      params: {
        perPage: 12,
      },
    });

    setBusiness(data.data);
  }

  useEffect(() => {
    fetchEstablishments();
  }, []);
  return (
    <Container>
      <Search>
        <InputSearch
          name="search"
          placeholder="Busque por um estabelecimento"
          onChange={(e) => fetchEstablishments(e.target.value)}
        />
        <AiOutlineSearch size={20} />
      </Search>

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

      <Pagination numbPages={1} />
    </Container>
  );
}

export default Home;
