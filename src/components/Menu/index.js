import React, { useState } from 'react';

import { Twirl as Hamburger } from 'hamburger-react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';

import logo from '~/assets/logos/02.svg';
import { signOutRequest } from '~/store/modules/auth/actions';

import Avatar from '../Avatar'
import Link from './Link';
import Profile from './Profile';

import {
  Container,
  Navigation,
  Logo,
  Menu as MenuMobile,
  MenuMobileContainer,
  MenuMobileTitle,
  MenuMobileProfileContainer,
  Name,
  Logout,
} from './styles';

const links = [
  {
    to: '/',
    label: 'Dashboard',
  },
  {
    to: '/users',
    label: 'Usuários',
  },
];

const Menu = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [isToggled, setIsToggled] = useState(false);

  const history = useHistory();

  const handleClickLogout = () => {
    dispatch(signOutRequest());
    history.push('/login');
  };

  return (
    <>
      <Container>
        <Navigation>
          <Logo src={logo} />
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              label={label}
              className="link"
              active={
                pathname === to ||
                pathname === `${to}/${id}` ||
                pathname === `${to}/create` ||
                pathname === `${to}/${id}`
              }
            />
          ))}
          <MenuMobileContainer>
            <Hamburger
              size={20}
              color="#fff"
              toggled={isToggled}
              toggle={() => setIsToggled(!isToggled)}
            />
          </MenuMobileContainer>
        </Navigation>
        <Profile />
      </Container>
      <MenuMobile isToggled={isToggled}>
        <MenuMobileProfileContainer onClick={() => { history.push('/profile'); setIsToggled(false) }}>
          <Avatar src={user.photo} />
          <Name>{user.name}</Name>
        </MenuMobileProfileContainer>
        {links.map(({ to, label }) => (
          <MenuMobileTitle to={to} onClick={() => setIsToggled(false)}>
            {label}
          </MenuMobileTitle>
        ))}

        <Logout onClick={() => handleClickLogout()}>Sair</Logout>
      </MenuMobile>
    </>
  );
};

export default Menu;
