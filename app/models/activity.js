import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  type: DS.attr('string'),
  name: DS.attr('string'),
  dateTime: DS.attr('date'),
  language: DS.attr('string'),
  image: DS.attr('string'),
  person: DS.attr(),
  isConference: Ember.computed('type',function() {
    return this.get('type') === 'C';
  }),
  isWorkshop: Ember.computed('type',function() {
    return this.get('type') === 'W';
  }),
});
