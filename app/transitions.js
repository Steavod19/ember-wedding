export default function(){
  this.transition(
    this.fromRoute('about'),
    this.toRoute('party.groom'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
