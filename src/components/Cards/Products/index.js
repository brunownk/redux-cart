import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as BagActions } from '~/store/ducks/bag';

import Product from './Product';
import ProductCart from './ProductCart';

const Card = ({ cart, data, quantity = 0 }) => {
  const dispatch = useDispatch();

  function addProduct(quantityParams) {
    const quantityAux = quantityParams || quantity;

    dispatch(BagActions.addProduct(data, quantityAux + 1));
  }

  function removeProduct(quantityParams) {
    const quantityAux = quantityParams || quantity;
    if (quantityAux < 1) {
      return;
    }

    if (quantityAux === 1) {
      dispatch(BagActions.removeProduct(data._id));
    } else {
      dispatch(BagActions.addProduct(data, quantityAux - 1));
    }
  }

  function clearProduct() {
    dispatch(BagActions.removeProduct(data._id));
  }

  return (
    <>
      {cart ? (
        <ProductCart
          data={data}
          quantity={quantity}
          addProduct={addProduct}
          removeProduct={removeProduct}
          clearProduct={clearProduct}
        />
      ) : (
        <Product
          data={data}
          addProduct={addProduct}
          removeProduct={removeProduct}
          quantity={quantity}
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
  data: PropTypes.shape({}).isRequired,
};
