import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Logout from '../Logout';
import Avatar from '../../Avatar'

import { Container, Info, Name } from './styles';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const history = useHistory();

  return (
    <Container onClick={() => history.push('/profile')}>
      <Avatar src={user.photo}/>
      <Info>
        <Name>{user.name}</Name>
      </Info>
      <Logout />
    </Container>
  );
};

export default Profile;
