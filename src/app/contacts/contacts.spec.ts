import {
  it,
  inject,
  injectAsync,
  describe,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';

// Load the implementations that should be tested
import {Contacts} from './contacts';

describe('Contacts', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Contacts
  ]);

  it('should log ngOnInit', inject([ Contacts ], (contacts) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
