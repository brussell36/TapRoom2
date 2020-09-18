import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import tapListReducer from '../../reducers/tap-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      masterTapList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of tapListReducer matches root reducer', () => {
    expect(store.getState().masterTapList).toEqual(tapListReducer(undefined, {type:null}));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type:null}));
  });

  test('Check that initial state of tapListReducer matches root reducer', () => {
    const action = {
      type: c.ADD_TAP,
      name: 'IPA',
      brand: 'Pfriem',
      price: '$6',
      alcoholContent: '7.2%',
      pints: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterTapList).toEqual(tapListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});