import { Component } from '@angular/core';
import { Events, ToastController } from 'ionic-angular'

@Component({
  selector: 'hello',
  templateUrl: 'hello.html'
})
export class HelloComponent {

  text: string;

  constructor(private event: Events, private toast: ToastController) {    
      //subscribe 1
      this.event.subscribe('saudacaoEN', (name)  => {
        name = `Hello ${name}, thats OK?`
        this.showToast(name);  
      })
      
      //subscribe 2
      this.event.subscribe('saudacaoBR', (name)  => {        
        name = `Fala ai ${name}, tudo tranquilo véi?`        
        this.showToast(name);  
      })
  }

  showToast(saudacao: string) {
    const toast = this.toast.create({
      //message: `Hello! ${name}` ,
      message: saudacao,
      duration: 3000      
    })

    toast.present();
  }

}
