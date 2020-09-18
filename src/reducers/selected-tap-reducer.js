import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { name, brand, price, alcoholContent, pints, id} = action;
  switch (action.type) {
    case c.SELECT_TAP:
      return {
        [id]: {
          name,
          brand,
          price,
          alcoholContent,
          pints,
          id
        }
      }
    case c.SELECT_NO_TAP:
      return null;
    default:
      return state;
  }
}