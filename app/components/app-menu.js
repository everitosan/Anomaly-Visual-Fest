import Ember from 'ember';

export default Ember.Component.extend({
  isMenuVisible: false,
  actions: {
    showMenu() {
      let menuState = this.get('isMenuVisible');
      this.set('isMenuVisible', !menuState);
    }
  }
});
