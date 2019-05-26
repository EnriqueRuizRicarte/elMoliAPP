import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Noticia } from '../../modelos/noticia.model';
import { ServicesTablonProvider } from '../../providers/services-tablon';
import { VerNoticiaPage } from '../ver-noticia/ver-noticia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noticias: Noticia[];
  constructor(public navCtrl: NavController, private _noticiaService: ServicesTablonProvider,
    private modalCtrl: ModalController) {
    this.noticiaGet();
  }

  noticiaGet() {
    this._noticiaService.getAllNoticias().subscribe(res => {
      this.noticias = res;
    })
  }
  openNotice(noticia?) {
    if (noticia) {
      const verNoticia = this.modalCtrl.create(VerNoticiaPage,{nta:noticia});
      verNoticia.present();
    }
  }
}
