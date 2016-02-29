import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  classNames: ['loaderContainer'],
  startLoading: function() {
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


  },
  didInsertElement: function(){
    if(ENV.environment === "production") {
      this.hideScreen();
      let canvas = this.get('element').querySelector('#loaderCanvas');
      let ctx =  canvas.getContext('2d');
      let image = new Image();
      let _self = this;

      this.set('ctx', ctx);
      this.set('canvas', canvas);


      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;

      let src = 'assets/img/1280_home.jpg';
      image.src = src;
      
      image.onload = function(){
        let interval = setInterval(_self.drawBase.bind(_self), 250);
        _self.set('interval', interval);
        _self.set('image', this);
        _self.startLoading();

      };
      image.onerror = function() {
        console.log("ERROR");
      };
    }

  },

  clear: function() {
    let ctx = this.get('ctx');

    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.fillStyle = 'rgba(0,0,0,0)';
    //draw shape to cover up stuff underneath
    ctx.fillRect(0,0,window.innerWidth, window.innerHeight);
    ctx.restore();
  },

  drawBase: function() {

    setTimeout(this.draw.bind(this), this.randomInt.calc(250, 500) );
  },

  draw: function() {
    let ctx = this.get('ctx');
    let canvas = this.get('image');
    let w = canvas.width;
    let h= canvas.height;
    let h1 = window.innerHeight;


    for(let i = 0; i < this.randomInt.calc(3,8); i++) {
      let x = Math.random() * w;
      let y = Math.random() * h;
      let y1 = Math.random() * h1;
      let spliceWidth = w - x;
      let spliceHeight = this.randomInt.calc(5, h / 3);
      ctx.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y1, spliceWidth, spliceHeight);
      ctx.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y1, x, spliceHeight);
    }


    // for (let i =0; i< 800; i++) {
    //   let x1 = this.randomInt.calc(0, window.innerWidth);
    //   let y1 =  this.randomInt.calc(0, window.innerHeight);
    //   let x2 = this.randomInt.calc(0, 50);
    //   let y2 = this.randomInt.calc(0, 50);
    //
    //   let rpos = this.randomInt.calc(-5, 5);
    //
    //   ctx.fillStyle = "#6fd3ad";
    //   ctx.fillRect(x1, y1, this.randomInt.calc(0, 50), y2);
    //   ctx.fillStyle = "#fdd9c9";
    //   ctx.fillRect(x1+rpos, y1+rpos, this.randomInt.calc(0, 50), this.randomInt.calc(0, 50));
    //   ctx.fillStyle = "#8cbdce";
    //   ctx.fillRect(x1-rpos, y1-rpos, this.randomInt.calc(0, 50), this.randomInt.calc(0, 50));
    // }
  },
  hideScreen: function() {
    Ember.$('section, #menu, footer').hide();
    Ember.$( this.get('element') ).show();
  },
  showScreen: function() {
    Ember.$( this.get('element') ).hide();
    Ember.$('section, #menu, footer').show();
  }
});
