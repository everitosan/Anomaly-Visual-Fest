import Ember from 'ember';

export default Ember.Component.extend({
  url: Ember.computed(function() {
    return "guarded-mesa-44249.herokuapp.com/conferences/-K9k4MwOaOABwEkrXPpx";
    //return window.location.host + window.location.pathname;
  })
});
