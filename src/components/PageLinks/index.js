import React from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

function PageLinks() {
  const { pathname } = useLocation();
  const [, , business, ,] = pathname.split('/');

  return (
    <Container>
      {business === 'business' ? (
        <Link to="/">
          <FiChevronLeft size={50} />
        </Link>
      ) : null}

      <span>
        <Link to="/">Home</Link>
        <FiChevronRight size={20} />
        <Link to="/">Sacola</Link>
      </span>
    </Container>
  );
}

export default PageLinks;
