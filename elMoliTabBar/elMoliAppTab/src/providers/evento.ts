import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Evento } from '../modelos/evento.model';
import { Observable } from 'rxjs';

/*
  Generated class for the EventoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventoProvider {

  private eventosCollection: AngularFirestoreCollection<Evento>;
  public events: Observable<Evento[]>;
  
  constructor(public http: HttpClient, private afBD: AngularFirestore) {
    console.log('Hello EventoProvider Provider');
  }

  getAllEventos(){
    this.eventosCollection = this.afBD.collection<Evento>('eventos',ref => ref.orderBy('id','desc'));
    this.events = this.eventosCollection.valueChanges();
    return this.events;
  }

}
