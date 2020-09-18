import * as c from './../actions/ActionTypes';

export default ( state = false, action) => {
  switch (action.type) {
    case c.EDIT_TRUE:
      return !state;
    case c.EDIT_FALSE:
      return !state;
    default:
      return state;
  }
};