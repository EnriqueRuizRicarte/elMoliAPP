import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Noticia } from '../../modelos/noticia.model';
import { ServicesTablonProvider } from '../../providers/services-tablon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticias: Noticia[];
  constructor(public navCtrl: NavController, private _noticiaService: ServicesTablonProvider) {
    this.noticiaGet();
  }

  noticiaGet(){
    this._noticiaService.getAllNoticias().subscribe(res =>{
      this.noticias = res;
    })
  }
}
