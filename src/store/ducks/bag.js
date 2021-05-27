import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Actions Creators */
export const { Types, Creators } = createActions({
  addProduct: ['product', 'quantity'],
  removeProduct: ['id'],
  clearBag: [],
});

/* Initial State */
const INITIAL_STATE = Immutable([]);

/* Reducers */
const addProduct = (state, { product, quantity }) => {
  let products = [...state];

  const exists = products.find((element) => element._id === product._id);

  if (exists) {
    console.log(products);
    products.map((element) => {
      if (element._id === product._id) {
        element.quantity = quantity;
      }
    });
  } else {
    product.quantity = quantity;
    products = [...products, product];
  }

  return products;
};

const removeProduct = (state, { id }) => {
  const products = state.filter((element) => element._id !== id);

  return products;
};

const clearBag = (state) => INITIAL_STATE;

/* Reducers to types */
const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: addProduct,
  [Types.REMOVE_PRODUCT]: removeProduct,
  [Types.CLEAR_BAG]: clearBag,
});

export default reducer;
