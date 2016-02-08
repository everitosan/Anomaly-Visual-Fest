import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query("activity", {filter: { type: 'C' }});
  },
  afterModel (model, params) {
    if (params.intent.name === "conferences" || params.intent.url === "/conferences") {//redirection
      if (model.get('length') >= 1) {
        console.log('redireccionando');
        this.transitionTo('conferences.conference', model.get('firstObject'));
      } else {
        this.transitionTo('page-not-found');
      }
    }
    else{ //no redirection, just set pointers

      // console.log(params);
      // debugger;
      // let id = params.intent.url.split('/')[2];
      // let curIndex = 0;
      // let current = model._prevContent.filter(function(item, index){
      //   if (item.id === id) {
      //     curIndex = index;
      //     return true;
      //   } else {
      //     return false;
      //   }
      // });

      // model.set('prevPointer', model._prevContent[curIndex -1])
      // model.set('nextPointer', model._prevContent[curIndex +1])

      // console.log(model);
    }
  }
});
