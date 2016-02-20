import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  imageUrl : "",
  image: "",
  imageElement: "",
  didUpdateAttrs: function(){
    this.calculateCss();
  },
  computedStyle: Ember.computed(function() {
    this.calculateCss();
    return Ember.String.htmlSafe("background: #000");

  }),
  resizeImage: function(){
    let imageUrl = this.get('image');
    let image = this.get('imageElement');

    let nw = window.innerWidth;
    let proportion = parseInt(image.height/(image.width)*100);
    let imw = 0;

    if(nw <=1600) {
      let pp = nw / 1600 ;
      imw = image.width * pp;
    } else {
      imw =image.width;
    }

    this.set('computedStyle', Ember.String.htmlSafe("background: url("+imageUrl+");background-size: 100%;padding-bottom:"+ proportion +"%; width:"+ imw +"px;"));
  },
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

        _self.set('imageElement', image);
        _self.resizeImage();

        Ember.$(window).on('resize', _self.resizeImage.bind(_self));

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
