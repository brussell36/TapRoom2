import * as a from './../../actions';

describe('tap list actions', () => {
  it('deleteTap should create DELETE_TAP action', () => {
    expect(a.deleteTap(1)).toEqual({
      type: 'DELETE_TAP',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addTap should create ADD_TAP action', () => {
    expect(a.addTap({name: 'IPA', brand: 'Pfriem', price: '$6', alcoholContent: '7.2%', pints: 124, id: 1})).toEqual({
      type: 'ADD_TAP',
      name: 'IPA',
      brand: 'Pfriem',
      price: '$6',
      alcoholContent: '7.2%',
      pints: 124,
      id: 1
    });
  });
});