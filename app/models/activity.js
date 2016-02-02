import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  name: DS.attr('string'),
  dateTime: DS.attr('string'),
  language: DS.attr('string')
});
