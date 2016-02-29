import Ember from 'ember';

export function initialize(/* appInstance */) {
  // appInstance.registry.injection('route', 'foo', 'service:foo');
  Ember.$(window).on('scroll', function(event){
    var $list = Ember.$('.personList');
    
    if($list.length > 0  && window.innerWidth > 767 ) {

      var scroll = event.currentTarget.scrollY * 0.15 ;
      var trans = "matrix(1, 0, 0, 1, 0, -" + scroll + ")";

      $list.css('transform', trans );
    }

  });
}

export default {
  name: 'parallax',
  initialize: initialize
};
