import Ember from 'ember';

export function mailtolink(params) {
  let mailTo = '<a data-text="'+params[0]+'" href="mailto:' + params[1]+'"';
  if (params[2]){
    mailTo += "class='"+params[2]+"'";
  }
  mailTo +='>';
  mailTo += params[0] + '</a>';

  return new Ember.Handlebars.SafeString(mailTo);
}

export default Ember.Helper.helper(mailtolink);
