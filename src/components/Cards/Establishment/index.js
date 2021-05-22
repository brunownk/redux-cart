import React from 'react';

import defaultImg from '~/assets/svg/rodaPizza.svg';

import {
  Container,
  LogoImg,
  Content,
  Header,
  Description,
  EstablishmentName,
  Category,
} from './styles';

const Card = () => {
  return (
    <Container>
      <LogoImg src={defaultImg} alt="Logo" />
      <Content>
        <Header>
          <EstablishmentName>RodaPizza</EstablishmentName>
          <Category>Pizzarias</Category>
        </Header>
        <Description>Rua José Loureira da Silva, 1230</Description>
        <Description>Centro</Description>
      </Content>
    </Container>
  );
};

export default Card;
