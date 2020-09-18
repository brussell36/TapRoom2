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
});