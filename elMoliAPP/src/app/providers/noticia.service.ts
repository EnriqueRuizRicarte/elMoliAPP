import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Noticia } from '../home/noticia.model';
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  private noticiasCollection: AngularFirestoreCollection<Noticia>;
  public noticias: Observable<Noticia[]>;
  constructor(public http: HttpClient, private afDB: AngularFirestore) { 

  }

  getNoticias(){
    this.noticiasCollection = this.afDB.collection<Noticia>('noticias');
    this.noticias = this.noticiasCollection.valueChanges();
    return this.noticias;
  }
  
}
