import React from 'react';
import selectListing from '../public/actions/select_listing.js';

describe('selectListing', () => {
  it('should be a function', () => {
    expect(selectListing).toEqual(jasmine.any(Function));
  });
});

