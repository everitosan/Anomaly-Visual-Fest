import Ember from 'ember';

export default Ember.Component.extend({
  isWebsite : Ember.computed('link', 'type', function(){
    return (this.get('link') && this.get('type') === 'website') ;
  }),
  isFacebook : Ember.computed('link', 'type', function(){
    return (this.get('link') && this.get('type') === 'facebook');
  }),
  isTwitter : Ember.computed('link', 'type', function(){
    return (this.get('link') && this.get('type') === 'twitter');
  }),
  isInstagram : Ember.computed('link', 'type', function(){
    return (this.get('link') && this.get('type') === 'instagram');
  })
});
