import Ember from 'ember';

export default Ember.Component.extend({
  url: Ember.computed(function() {
    return window.location.href;
  })
});
