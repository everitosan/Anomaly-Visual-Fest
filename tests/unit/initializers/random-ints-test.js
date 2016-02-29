import Ember from 'ember';
import RandomIntsInitializer from '../../../initializers/random-ints';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | random ints', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  RandomIntsInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
