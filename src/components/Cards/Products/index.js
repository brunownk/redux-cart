import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as BagActions } from '~/store/ducks/bag';

import Product from './Product';
import ProductCart from './ProductCart';

const Card = ({ cart, data }) => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag);
  
  function verifyQuantity(data) {
    if (!cart) {
      const product = bag.find((element) => element._id === data._id);
      product ? setQuantity(product.quantity) : setQuantity(0);
      return
    }
  
    if (data?.quantity) {
      setQuantity(data.quantity);
      return
    }
  }

  function addProduct() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(BagActions.addProduct(data, newQuantity));
  }

  function removeProduct() {
    if (quantity < 1) {
      return;
    }

    if (quantity === 1) {
      const newQuantity = 0;
      setQuantity(newQuantity);
      dispatch(BagActions.removeProduct(data._id));
    } else {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(BagActions.addProduct(data, newQuantity));
    }
  }

  function clearProduct() {
    const newQuantity = 0;
    setQuantity(newQuantity);
    dispatch(BagActions.removeProduct(data._id));
  }

  useEffect(() => {
    verifyQuantity(data);
  }, [bag])

  return (
    <>
      {cart ? (
        <ProductCart
          data={data}
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
