import React, { useCallback, useState } from 'react';

import PropTypes from 'prop-types';

import Product from './Product';
import ProductCart from './ProductCart';

const Card = ({ cart, data }) => {
  const [countproduct, setCountProduct] = useState(0);

  const addProduct = useCallback(() => {
    setCountProduct(countproduct + 1);
  }, [countproduct]);

  const removeProduct = useCallback(() => {
    if (
      countproduct === 0
        ? setCountProduct(0)
        : setCountProduct(countproduct - 1)
    );
  }, [countproduct]);

  return (
    <>
      {cart ? (
        <ProductCart
          data={data}
          addProduct={addProduct}
          removeProduct={removeProduct}
          countproduct={countproduct}
        />
      ) : (
        <Product
          data={data}
          addProduct={addProduct}
          removeProduct={removeProduct}
          countproduct={countproduct}
        />
      )}
    </>
  );
};

export default Card;

Card.defaultProps = {
  cart: false,
};

Card.propTypes = {
  cart: PropTypes.bool,
  data: PropTypes.shape({
    _id: PropTypes.string,
    _active: PropTypes.bool,
    business: PropTypes.string,
    category: PropTypes.string,
    imgs: PropTypes.arrayOf(PropTypes.object),
    name: PropTypes.string,
    pricing: PropTypes.number,
  }).isRequired,
};
