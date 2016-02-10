import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query("activity", {
      limitToLast: 1
    });
  },
  afterModel(model) {
    if (model.get('length') >= 1) {
      this.transitionTo('workshop', model.get('firstObject'));
    }
    else {
      this.transitionTo('index');
    }
  }
});
