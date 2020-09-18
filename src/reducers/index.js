import formVisibleReducer from './form-visible-reducer';
import tapListReducer from './tap-list-reducer';
import editReducer from './edit-reducer';
import selectedTapReducer from './selected-tap-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTapList: tapListReducer,
  editing: editReducer,
  selectedTap: selectedTapReducer
});

export default rootReducer;