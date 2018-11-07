import { SELECT_PRODUCT, DESELECT_PRODUCT } from './actionTypes';

export const selectProduct = (key) => {
  return {
    type: SELECT_PRODUCT,
    productKey: key,
  };
};

export const deselectProduct = () => {
  return {
    type: DESELECT_PRODUCT,
  };
};