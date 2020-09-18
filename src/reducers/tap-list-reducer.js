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
    case c.POUR:
      const tapToDecrease = state[id];
      let newTap = {...tapToDecrease, pints: tapToDecrease.pints - 1};
      return Object.assign({}, state, { [id]: newTap});
    default:
      return state;
  }
};