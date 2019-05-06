import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Noticia } from '../../modelos/noticia.model';

/**
 * Generated class for the VerNoticiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-noticia',
  templateUrl: 'ver-noticia.html',
})
export class VerNoticiaPage {
  public noticia: Noticia;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public viewCtrl: ViewController) {
      this.noticia = this.navParams.get('nta');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerNoticiaPage');
  }
  cerrarModal(){
    this.viewCtrl.dismiss();
    }
  
}
