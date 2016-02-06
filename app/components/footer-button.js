import Ember from 'ember';

export default Ember.Component.extend({
  isCalendar: Ember.computed('type', function() {
    return this.get('type') == "Calendar"
  })
});
