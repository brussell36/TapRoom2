import * as c from './../actions/ActionTypes';

export default (state={}, action) => {
  const { name, brand, price, alcoholContent, pints, id } = action;
  switch (action.type) {
    case c.ADD_TAP:
      return Object.assign({}, state, {
        [id]: {
          name,
          brand,
          price,
          alcoholContent,
          pints,
          id
        }
      });
    case c.DELETE_TAP:
      const newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};