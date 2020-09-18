import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes'

describe('tap list actions', () => {
  it('deleteTap should create DELETE_TAP action', () => {
    expect(a.deleteTap(1)).toEqual({
      type: c.DELETE_TAP,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addTap should create ADD_TAP action', () => {
    expect(a.addTap({name: 'IPA', brand: 'Pfriem', price: '$6', alcoholContent: '7.2%', pints: 124, id: 1})).toEqual({
      type: c.ADD_TAP,
      name: 'IPA',
      brand: 'Pfriem',
      price: '$6',
      alcoholContent: '7.2%',
      pints: 124,
      id: 1
    });
  });

  it('editTap should create EDIT_TAP action', () => {
    expect(a.editTap()).toEqual({
      type: c.EDIT_TAP
    });
  });

  it('selectTap should create SELECT_TAP action', () => {
    expect(a.selectTap({name: 'IPA', brand: 'Pfriem', price: '$6', alcoholContent: '7.2%', pints: 124, id: 1})).toEqual({
      type: c.SELECT_TAP,
      name: 'IPA',
      brand: 'Pfriem',
      price: '$6',
      alcoholContent: '7.2%',
      pints: 124,
      id: 1
    });
  });
});