import Ember from 'ember';

export default Ember.Component.extend({
  conferences: Ember.computed('model', function(){
    return this.get('model')._prevContent;
  }),

  current : Ember.computed('model', function() {
    let params = window.location.pathname.split('/');
    let current = params[ params.length -1 ];
    let arr = this.get('model');
    let currPos = 0;

    arr.forEach(function(item, index){
      if( current === item.get('id') ) {
        currPos = index;
      }
    });

    return currPos;
  }),
  prev: Ember.computed(function() {
    let cur = this.get('current');
    if(cur > 0) {
      return this.get('conferences')[cur - 1].id;
    }
  }),
  post: Ember.computed(function() {
    let cur = this.get('current');
    if(cur < this.get('conferences').length - 1) {
      return this.get('conferences')[cur + 1 ].id;
    }
  }),
  isPrev: Ember.computed(function() {

  }),
  actions: {
    goNext() {
      let cur = this.get('current');
      if(cur < this.get('conferences').length - 2) {
        this.set('current', cur + 1 );
        
        let n = this.get('current') + 1; 
        if(n < this.get('conferences').length - 1){ 
          this.set('post', this.get('conferences')[ n ].id);
        }

        let p = this.get('current') - 1; 
        this.set('prev', this.get('conferences')[p].id);
      }
    },
    goPrev() {
      let cur = this.get('current');
      if(cur > 0 ) {
        this.set('current', cur - 1 );

        let n = this.get('current') + 1;         
        this.set('post', this.get('conferences')[ n ].id);

        let p = this.get('current') - 1; 
        if(p >= 0 ){
          this.set('prev', this.get('conferences')[p].id);
        }
      }
    }
  }
});
