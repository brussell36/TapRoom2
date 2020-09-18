import * as c from './ActionTypes';

export const deleteTap = id => ({
  type: c.DELETE_TAP,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addTap = (tap) => {
  const { name, brand, price, alcoholContent, pints, id } = tap;
  return {
    type: c.ADD_TAP,
    name,
    brand,
    price,
    alcoholContent,
    pints,
    id
  }
}

export const editTap = (tap) => {
  return {
    type: c.EDIT_TAP,
    tap
  }
}

export const selectTap = (tap) => {
  const { name, brand, price, alcoholContent, pints, id } = tap;
  return {
    type: c.SELECT_TAP,
    name,
    brand,
    price,
    alcoholContent,
    pints,
    id
  }
}

export const selectNoTap = () => {
  return {
    type: c.SELECT_NO_TAP
  }
}