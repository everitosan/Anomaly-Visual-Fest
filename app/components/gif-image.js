import Ember from 'ember';

export default Ember.Component.extend({
  computedStyle: Ember.computed('imageUrl', function() {
    let imageUrl = this.get('imageUrl');
    return Ember.String.htmlSafe("background: url("+imageUrl+")");
  })
});
