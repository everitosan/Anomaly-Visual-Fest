import Ember from 'ember';

export default Ember.Component.extend({
  isMenuVisible: false,
  actions: {
    showMenu() {
      this.set('isMenuVisible', true);
    },
    hideMenu() {
      this.set('isMenuVisible', false);
    }
  }
});
