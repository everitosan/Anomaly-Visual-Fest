import {animate, stop} from "liquid-fire";

export default function menuTransition(opts={}) {
    if(this.newElement) {
      this.newElement.css({visivility: 'visible'});
      console.log(this);
    }
}
