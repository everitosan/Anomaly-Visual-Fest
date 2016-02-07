import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll("activity");
  },
  afterModel(model) {
    if (model.get('length') >= 1) {
      this.transitionTo('conference', model.get('firstObject'));
    } else {
      this.transitionTo('index');
    }
  }
});
