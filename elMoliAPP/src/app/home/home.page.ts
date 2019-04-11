import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseFirestore } from '@angular/fire';
import { NoticiaService } from '../providers/noticia.service';
import { Noticia } from './noticia.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  noticias: Noticia[];
  constructor(public navCtrl: NavController, private _noticiaService: NoticiaService) {
    this.getNoticias();
  }

  /* doRefresh(event) {
    //INICIO DEL REFESH
    setTimeout(()=>{
      //Obtenemos las noticias de nuevo por si hay algun cambio
      this.getNoticias();
      //Fin del refresh
      event.complete();
    },1000);
  } */

  getNoticias(){
    this._noticiaService.getNoticias().subscribe(
      res => {
        this.noticias = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
