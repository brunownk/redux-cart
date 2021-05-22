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

const Card = ({ data }) => {
  return (
    <Container>
      <LogoImg src={data?.assets?.logo || defaultImg} alt="Logo" />
      <Content>
        <Header>
          <EstablishmentName>{data?.name}</EstablishmentName>
          <Category>{data?.description}</Category>
        </Header>
        
        <Description>{`Rua ${data?.address?.street_name}, ${data?.address?.street_number}`}</Description>
        <Description>{data?.address?.neighborhood}</Description>
      </Content>
    </Container>
  );
};

export default Card;
