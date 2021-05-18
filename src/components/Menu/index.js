import React from 'react';

import { FiChevronDown } from 'react-icons/fi';
import { useLocation, useParams } from 'react-router-dom';

import logo from '~/assets/logos/01.svg';
import CartIcon from '~/assets/svg/cartMenu.svg';

import InputSearch from '../InputSearch';
import Link from './Link';
import Profile from './Profile';
import {
  Container,
  Navigation,
  Logo,
  IconCart,
  OpitionsProfile,
} from './styles';

const links = [
  {
    to: '/',
    label: 'Dashboard',
  },
];

const Menu = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  return (
    <>
      <Container>
        <Navigation>
          <Logo to="/">
            <img src={logo} alt="Razzo" />
          </Logo>

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
        </Navigation>

        <InputSearch
          maxWidth={266}
          name="search"
          placeholder="Busque por um produto"
        />

        <div>
          <span>
            <IconCart to="/cart">
              <img src={CartIcon} alt="Rappido" />
            </IconCart>
          </span>

          <OpitionsProfile>
            <Profile />
            <FiChevronDown />
          </OpitionsProfile>
        </div>
      </Container>
    </>
  );
};

export default Menu;
