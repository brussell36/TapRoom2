import tapListReducer from '../../reducers/tap-list-reducer';

describe('tapListReducer', () => {
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

  test('Should return default state if no action passed into the reducer', () => {
    expect(tapListReducer(defaultState, {type:null})).toEqual(defaultState);
  });

  test('Should successfully add new tap data to masterTapList', ()=> {
    const { name, brand, price, alcoholContent, pints, id } = defaultState;
    action = {
      type: 'ADD_TAP',
      name,
      brand,
      price,
      alcoholContent,
      pints,
      id
    };
    expect(tapListReducer({}, action)).toEqual({
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

  test('Should successfully delete a tap', () => {
    action = {
      type: 'DELETE_TAP',
      id: 1
    };
    expect(tapListReducer(defaultState, action)).toEqual({
      2: {
        name: 'AltBeer',
        brand: 'Occidental',
        price: '$6',
        alcoholContent: '5.5%',
        pints: 124,
        id: 2
      }
    });
  });
});