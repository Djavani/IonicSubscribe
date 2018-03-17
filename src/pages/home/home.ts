import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;
  subscribe1Escolhido: boolean = true;

  constructor(
    public event: Events,
    public navCtrl: NavController) {

  }


  submitEvent() {
    // operador ternario
    this.name == undefined?  this.name = 'Zé Ninguem' : this.name;

    // usando operador ternario
    this.subscribe1Escolhido ? this.event.publish('saudacaoEN', this.name) : this.event.publish('saudacaoBR', this.name);
    

    // usando IF
    /* if(this.subscribe1Escolhido) {
      this.event.publish('hello', this.name);
    }else {
      this.event.publish('hello2', this.name);
    }  */   
  }

}
