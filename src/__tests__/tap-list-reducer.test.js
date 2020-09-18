import tapListReducer from './../reducers/tap-list-reducer';

describe('tapListReducer', () => {
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

  test('Should return default state if no action passed into the reducer', () => {
    expect(tapListReducer(defaultState, {type:null})).toEqual(defaultState);
  });
});