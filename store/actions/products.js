import { SELECT_PRODUCT, DESELECT_PRODUCT } from './actionTypes';

export const selectProduct = (key,restaurantName, isOther = false) => {
  return {
    type: SELECT_PRODUCT,
    productKey: key,
    restaurantName: restaurantName,
    isOther: isOther,
  };
};

export const deselectProduct = () => {
  return {
    type: DESELECT_PRODUCT,
  };
};