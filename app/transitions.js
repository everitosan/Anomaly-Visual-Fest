export default function(){
  let duration = 0;
  this.transition(
    this.fromRoute('index'),
    this.toRoute(['conferences', 'workshops', 'calendar', 'tickets', 'location']),
    this.use('toLeft', {duration}),
    this.reverse('toRight', {duration})
    );
}
