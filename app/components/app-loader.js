import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  didInsertElement: function() {
     if(ENV.environment === "production") {
      this.hideScreen();
      let list = this.assets.assetMap.assets;
      let newList = [], 
          promisesList = [];
      let _self = this;

      for (let asset in list) {
        let extention = list[asset].split('.')[1];
        if( extention === 'png' || extention === 'jpg' || extention === 'gif') {
          newList.push(list[asset]);

          let promise = new Ember.RSVP.Promise(function(resolve){
            let image = new Image();
            image.src = list[asset];
            image.onload = function(){
              resolve(image);
            };
          });

          promisesList.push(promise);
        }
      }

      Ember.RSVP.Promise.all(promisesList)
        .then(function(){
          _self.showScreen();
          console.log('loaded');
        }, function(){
          console.log('resource - error');
        });

     } else {
      
     }
  },
  hideScreen: function() {
    Ember.$('.ember-application').css('opacity', 0);
  },
  showScreen: function() {
    Ember.$('.ember-application').css('opacity', 1);
  }
});
