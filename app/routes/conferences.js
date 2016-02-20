import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query("activity", {filter: { type: 'C' }});
  },
  afterModel (model, params) {

    if (params.intent.name === "conferences" || params.intent.url === "/conferences") {//redirection
      console.log('redirection');
      if (model.get('length') >= 1) {
        this.transitionTo('conferences.conference', model.get('firstObject'));
      } else {
        this.transitionTo('page-not-found');
      }
    } else {
      
    }
  }
});
