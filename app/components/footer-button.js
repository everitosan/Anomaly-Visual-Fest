import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['footer-button'],
  isCalendar: Ember.computed('type', function() {
    return this.get('type') === "Calendar";
  }),

  mouseMove(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let button = this.get('element').querySelector('.button').getBoundingClientRect();
    let $parent = Ember.$(this.get('element'));


    if( mouseX >= button.left && mouseX <= button.right && mouseY >= button.top && mouseY <= button.bottom) {

      $parent.addClass('hover');

    } else {
      $parent.removeClass('hover');
    }


  }
});
