import selectedTapReducer from './../../reducers/selected-tap-reducer';
import * as c from './../../actions/ActionTypes';

describe('selectedTapReducer', () => {
  let action;
  const defaultState = {
    1: {
      name: 'IPA',
      brand: 'Pfriem',
      price: '$6',
      alcoholContent: '7.2%',
      pints: 124,
      id: 1
    },
    2: {
      name: 'AltBeer',
      brand: 'Occidental',
      price: '$6',
      alcoholContent: '5.5%',
      pints: 124,
      id: 2
    }
  }

  test('Should return null if no tap is selected', () => {
    expect(selectedTapReducer(null, {type: null})).toEqual(null);
  });

  test('Should return selected tap', () => {
    const { name, brand, price, alcoholContent, pints, id} = defaultState;
    action = {
      type: c.SELECT_TAP,
      name,
      brand,
      price,
      alcoholContent,
      pints,
      id
    }
    expect(selectedTapReducer(null, action)).toEqual({
      [id]: {
        name,
        brand,
        price,
        alcoholContent,
        pints,
        id
      }
    });
  });
});