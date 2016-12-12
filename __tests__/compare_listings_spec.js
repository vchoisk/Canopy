import React from 'react';
import compareListings from '../public/actions/compare_listings';

describe('compareListings', () => {
  it('should be a function', () => {
    expect(compareListings).toEqual(jasmine.any(Function));
  });
});

