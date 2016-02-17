import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['footer-button'],
  isCalendar: Ember.computed('type', function() {
    return this.get('type') === "Calendar";
  }),
  mouseEnter() {
    let $element = $(this.get('element'));
    $element.addClass('hover');
  },
  mouseLeave() {
    let $element = $(this.get('element'));
    $element.removeClass('hover');
  }
});
