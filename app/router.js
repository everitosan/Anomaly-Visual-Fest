import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('conferences');
  this.route('workshops');
  this.route('calendar');
  this.route('tickets');
  this.route('location');
});

export default Router;
