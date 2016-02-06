import Ember from 'ember';

export function mailtolink(params) {
  let mailTo = '<a href="mailto:' + params[1] + '">';
   mailTo += params[0] + '</a>';
   return new Ember.Handlebars.SafeString(mailTo);
}

export default Ember.Helper.helper(mailtolink);
