import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

contador:number=0

incrementar(){
  this.contador=this.contador+1
}
decrementar(){

  if(this.contador===0) return
  this.contador=this.contador-1
}
}
