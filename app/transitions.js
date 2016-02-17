export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('conferences'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}