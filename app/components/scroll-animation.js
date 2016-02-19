import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'canvas',
  classNames: ['scroll-animation'],
  didInsertElement: function() {
    let canvas = this.get('element');
    this.set('width', window.innerWidth);
    this.set('height', window.innerHeight);

    canvas.width = this.get('width');
    canvas.height = this.get('height');

    this.set('ctx', canvas.getContext('2d'));
    window.onmousewheel = this.drawBars.bind(this);
  },
  drawBars: function(){
    Ember.$(this.get('element')).show();
    let w = this.get('width');
    let h = this.get('height');

    let ctx = this.get('ctx');
    ctx.save();
      ctx.globalAlpha = 0.75;
      ctx.fillStyle = this.randomColor();
      ctx.fillRect( this.intRand(0, w), this.intRand(0, h), this.intRand(w/10, w/5), this.intRand(10, h/17));
    ctx.restore();
    setTimeout(this.clear.bind(this), 800);

  },
  intRand: function(a, b) {
    return ~~(Math.random() * (b - a) + a);
  },
  randomColor: function(){
    let colors = [ '#FE40FB', '#FFF', '#f9ff2a'];
    let len = colors.length;

    return colors[this.intRand(0, len)];
  },
  clear : function() {
    let ctx = this.get('ctx');

    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.fillStyle = 'rgba(0,0,0,0)';
    //draw shape to cover up stuff underneath
    ctx.fillRect(0,0,this.get('width'), this.get('height'));
    ctx.restore();
    Ember.$(this.get('element')).hide();
  }
});
