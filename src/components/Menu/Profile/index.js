import React from 'react';

import AvatarImg from '~/assets/avatar-placeholder.png';

import Avatar from '../../Avatar';
import { Container } from './styles';

const Profile = () => {
  return (
    <Container>
      <Avatar src={AvatarImg} size={48} />
    </Container>
  );
};

export default Profile;
