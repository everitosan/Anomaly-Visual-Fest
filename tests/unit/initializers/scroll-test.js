import Ember from 'ember';
import ScrollInitializer from '../../../initializers/scroll';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | scroll', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ScrollInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
