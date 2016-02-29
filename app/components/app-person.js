import Ember from 'ember';

export default Ember.Component.extend({
  timeLine: function() {
    let container =  this.get('element').querySelector('.name');
    let full_name =  this.get('element').querySelector('.full_name');
    let TimeLine = new TimelineMax();

    TimeLine
      .to(container, 0.025, {backgroundPosition: this.randomInt.calc(-50,50)+'px '+this.randomInt.calc(-50,50)+'px'})
      .to(full_name, 0.010, {css:{ 'transform' : 'skewX(' + this.randomInt.calc(-60,60) + 'deg)'}})
      .to(full_name, 0.010, {css:{ 'transform' : 'skewX(' + this.randomInt.calc(-60,60) + 'deg)'}})
      .to(container, 0.025, {backgroundPosition: this.randomInt.calc(-50,50)+'px '+this.randomInt.calc(-50,50)+'px'})
      .to(full_name, 0.025, {css:{ 'transform' : 'skewX(' + this.randomInt.calc(-60,60) + 'deg)'}})
      .to(container, 0.025, {backgroundPosition: this.randomInt.calc(-50,50)+'px '+this.randomInt.calc(-50,50)+'px'})
      .to(full_name, 0.010, {css:{ 'transform' : 'skewX(' + this.randomInt.calc(-60,60) + 'deg)'}})
      .to(full_name, 0.025, {css:{ 'transform' : 'skewX(' + this.randomInt.calc(-60,60) + 'deg)'}})
      .to(container, 0.025, {backgroundPosition: '0px 0px'})
      .to(full_name, 0.025, {css:{ 'transform' : 'skewX(0deg)'}})
      ;

    return TimeLine;
  },
  mouseEnter () {

    let timeLine = this.timeLine();
    timeLine.restart();
    timeLine.play();
  }
});
