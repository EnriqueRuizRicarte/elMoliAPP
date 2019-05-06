import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Noticia } from '../modelos/noticia.model';
import { Observable } from 'rxjs';

/*
  Generated class for the ServicesTablonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesTablonProvider {

  private noticiasCollection: AngularFirestoreCollection<Noticia>;
  public noticiass: Observable<Noticia[]>;

  constructor(public http: HttpClient, private afBD: AngularFirestore) {
    console.log('Hello ServicesTablonProvider Provider');
  }

  getAllNoticias(){
    this.noticiasCollection = this.afBD.collection<Noticia>('noticias');
    this.noticiass = this.noticiasCollection.valueChanges(); 
    return this.noticiass;
  }

}
