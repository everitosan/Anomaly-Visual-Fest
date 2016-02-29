import Ember from 'ember';

export function initialize(app) {
  // application.inject('route', 'foo', 'service:foo');

  let randomInt = Ember.Object.extend();

  randomInt.reopen({
    calc: function(a, b) {
      return parseInt( (Math.random() * (b - a) + a) );
    }
  });


  app.register('randomInt:main', randomInt);
  app.inject('component', 'randomInt', 'randomInt:main');


}

export default {
  name: 'random-ints',
  initialize
};
