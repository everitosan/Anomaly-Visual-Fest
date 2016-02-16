import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  computedStyle: Ember.computed('imageUrl', function() {
    let imageUrl = this.get('imageUrl');
    let _self = this;

    imageUrl = "assets/img/" + imageUrl;
    if(ENV.environment === "production") {
      imageUrl = this.assets.resolve(imageUrl);
    }

    let imagePromise = new Ember.RSVP.Promise(function(resolve, reject) {
      let im = new Image();
      im.src=imageUrl;
      im.onload=function(){
        resolve(this);
      };
    }).then(function(image){
      let fix_scale = (_self.get('type') === "profile" )? 1.2 : 1;
      let proportion = parseInt(image.height/(image.width*fix_scale)*100);


      _self.set('computedStyle', Ember.String.htmlSafe("background: url("+imageUrl+"); padding-bottom:"+ proportion +"%;") );
    }, function(reason) {
      console.log(reason);
    });


    return Ember.String.htmlSafe("background: #000");
  })
});
