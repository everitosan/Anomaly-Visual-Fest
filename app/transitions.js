export default function(){

  this.transition(
    this.fromRoute('index'),
    this.toRoute(['conferences', 'workshops', 'calendar', 'tickets', 'location']),
    this.use('toLeft'),
    this.reverse('toRight')
    );
}
