import React from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { signOutRequest } from '~/store/modules/auth/actions';

import { Container, Text } from './styles';

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(signOutRequest());
    history.push('/login');
  };

  return (
    <Container type="button" onClick={handleClickLogout}>
      <Text>Sair</Text>
    </Container>
  );
};

export default Logout;
