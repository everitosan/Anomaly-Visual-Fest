import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path : '/'});
  this.route('conferences', function() {
    this.route('conference',  { path:':conference_id'});
  });
  this.route('workshops');
  this.route('workshop',  { path:'/workshop/:workshop_id'});
  this.route('calendar');
  this.route('tickets');
  this.route('location');
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;
