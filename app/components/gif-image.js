import Ember from 'ember';

export default Ember.Component.extend({
  computedStyle: Ember.computed('imageUrl', function() {
    let imageUrl = this.get('imageUrl');
    imageUrl = "https://guarded-mesa-44249.herokuapp.com/assets/img/" + imageUrl;

    this.set('imageUrl', imageUrl);
    return Ember.String.htmlSafe("background: url("+imageUrl+")");
  })
});
