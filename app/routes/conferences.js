import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query("activity", {filter: { type: 'C' }});
  }
  // ,
  // afterModel(model, params) {
  //   console.log(params);
  //   if (model.get('length') >= 1) {
  //     this.transitionTo('conferences.conference', model.get('firstObject'));
  //   } else {
  //     this.transitionTo('page-not-found');
  //   }
  // }
});
