import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  imageUrl : "",
  image: "",
  didUpdateAttrs: function(){
    this.calculateCss();
  },
  computedStyle: Ember.computed(function() {
    this.calculateCss();
    return Ember.String.htmlSafe("background: #000");

  }),
  calculateCss: function() {
    let imageUrl = this.get('imageUrl');
    let _self = this;

    imageUrl = "assets/img/" + imageUrl;
    if(ENV.environment === "production") {
      imageUrl = this.assets.resolve(imageUrl);
    }

    this.set('image', imageUrl);

    new Ember.RSVP.Promise(function(resolve, reject) {
      let im = new Image();
      im.src=imageUrl;
      im.onload=function(){
        resolve(this);
      };
    }).then(function(image){
      if(_self.get('type') === "homeActivity") {

        let nw = parseInt($('.conferencistas').css('width'));
        let pp = 1180 / nw;

        let imw = image.width * pp;
        let proportion = parseInt(image.height/(imw)*100);


        _self.set('computedStyle', Ember.String.htmlSafe("background: url("+imageUrl+"); padding-bottom:"+ proportion +"%; width:"+ imw +"px;"));
      }else {
        let fix_scale = (_self.get('type') === "profile" )? 1.2 : 1;
        let proportion = parseInt(image.height/(image.width*fix_scale)*100);
        _self.set('computedStyle', Ember.String.htmlSafe("background: url("+imageUrl+"); padding-bottom:"+ proportion +"%;") );

      }


    }, function(reason) {
      console.log(reason);
    });


  }
});
