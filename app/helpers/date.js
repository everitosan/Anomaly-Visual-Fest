import Ember from 'ember';

export function date(params) {

  let d = params[0];
  let returnV = '';
  let months = ['Enero','Febrero','Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  if (params[1] === "day") {
    returnV = d.getDate() + ' de ' + months[ d.getMonth() ] ; 
  } else if(params[1]==="time"){
    let hours = d.getHours();
    let minutes = d.getMinutes();

    if(minutes === 0) {
      minutes = "00";
    }

    if(hours < 9) {
       hours = "0"+ hours;
    }

    returnV = hours + ':' + minutes+' HRS';

  }
  return returnV;
}

export default Ember.Helper.helper(date);
