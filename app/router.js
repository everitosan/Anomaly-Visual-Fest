import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('conferences',  { path:'/conferences/:conference_id'});
  this.route('workshops',  { path:'/workshops/:workshop_id'});;
  this.route('calendar');
  this.route('tickets');
  this.route('location');
});

export default Router;
