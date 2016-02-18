
import Ember from 'ember';
import ScrollTop from '../mixins/scroll-top';

export function initialize() {
  Ember.Route.reopen(ScrollTop);
}

export default {
  name: 'scroll',
  initialize
};
