import Ember from 'ember';

export default Ember.Component.extend({
  isMenuVisible: false,
  timeLine : Ember.computed(function(){
    let menuElement = this.get('element').querySelector('.openMenu');
    let menuContainer = this.get('element').querySelector('.menuHandler');

    function intRand(a, b) {
      let rand = parseInt( (Math.random() * (b - a) + a) );
      return rand;
    }

    let timeLine = new TimelineMax();

    timeLine
      .to(menuElement, 0.025, {x:intRand(-100,100), y:intRand(-20,20), z:0.01})
      .to(menuContainer, 0.025, {x:intRand(-100,100), y:intRand(-10,10), z:0.01})
      .to(menuElement, 0.025, {x:intRand(-100,100), y:intRand(-20,20), z:0.01})
      .to(menuContainer, 0.025, {x:intRand(-100,100), y:intRand(-10,10), z:0.01})
      .to(menuElement, 0.025, {x:0, y:0, z:0.01})
      .to(menuContainer, 0.025, {x:0, y:0, z:0.01})
      ;
      
    return timeLine;
  }),
  mouseEnter() {
    let timeLine = this.get('timeLine');
    timeLine.restart();
    timeLine.play();
    
  },
  actions: {
    showMenu() {
      this.set('isMenuVisible', true);
    },
    hideMenu() {
      this.set('isMenuVisible', false);
    }
  }
});
