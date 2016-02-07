import Ember from 'ember';

export default Ember.Component.extend({
  isMenuVisible: false,
  actions: {
    showMenu() {
      this.set('isMenuVisible', true);
    },
    hideMenu() {
      this.set('isMenuVisible', false);
    },
    goConferences() {
      this.set('isMenuVisible', false);
      window.location.href = 'conferences/-K9j2vWu2cXoMfhXS7Io';
    }
  }
});
