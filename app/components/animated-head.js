import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  tagName: 'canvas',
  ImagesList : [],
  width : Ember.computed(function() {
    return window.innerWidth;
  }),

  height: Ember.computed(function() {
    return this.get('width') * 0.85;
  }),

  didInsertElement: function() {
    let canvas = this.get('element');
    let ctx = canvas.getContext('2d');

    canvas.width = this.get('width');
    canvas.height = this.get('height');

    this.set('ctx', ctx);
    this.resolveAssets();
    window.onresize = this.resize.bind(this);

  },

  resize : function() {
    let canvas = this.get('element');

    this.set('width',  window.innerWidth);
    this.set('height',  this.get('width') * 0.85);

    canvas.width = this.get('width');
    canvas.height = this.get('height');
    this.drawHead();

  },
  resolveAssets: function() {
    let images = ['head.png'],
        imageElements = [];
    let _self = this;
    let indexHelpr = 0,
        lenHelpr = 0;


    lenHelpr = images.length;
    //loop that resolve the main acoording to the enviorment
    images.forEach((image, index , array) => {
      array[index] = 'assets/img/' + image;
      if(ENV.environment === "production") {
        array[index] = this.assets.resolve(array[index]);
      }
    });

    //loop that return the image elements when loaded and call the drawHead function
    images.forEach((image, index, array) => {
      let im = new Image();
      im.src = array[index];

      im.onload = function() {
        imageElements.push(this);
        indexHelpr ++;
        if (indexHelpr === lenHelpr) {
          _self.set('ImagesList', imageElements);

          setInterval(_self.drawHead.bind(_self) ,500);
        }
      };
    });


  },

  drawHead : function() {
    let ctx = this.get('ctx');
    let images = this.get('ImagesList');

    this.clear();
    images.forEach((image) => {
      ctx.drawImage(image, 0, 0, this.get('width'), this.get('height'));
      setTimeout(this.drawGlitch.bind(this), this.intRand(250, 1000) );
    });
  },

  intRand: function(a, b) {
    return ~~(Math.random() * (b - a) + a);
  },

  drawGlitch : function() {
    let w= this.get('width');
    let h = this.get('height');
    let ctx = this.get('ctx');
    let canvas = this.get('element');

    for(let i = 0; i < this.intRand(1,5); i++) {
      let x = Math.random() * w;
      let y = Math.random() * h;
      let spliceWidth = w - x;
      let spliceHeight = this.intRand(5, h / 3);
      ctx.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
      ctx.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
    }
  },
  clear : function() {
    let ctx = this.get('ctx');

    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.fillStyle = 'rgba(0,0,0,0)';
    //draw shape to cover up stuff underneath
    ctx.fillRect(0,0,this.get('width'), this.get('height'));
    ctx.restore();
  }

});
