import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoProvider } from '../../providers/evento';
import { Evento } from '../../modelos/evento.model';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  eventos: Evento[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private _eventoService: EventoProvider) {
    this.getEventos();
  }

  getEventos(){
    this._eventoService.getAllEventos().subscribe(res =>{
      this.eventos = res;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

}
