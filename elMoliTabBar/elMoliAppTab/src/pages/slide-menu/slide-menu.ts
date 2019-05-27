import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { EventosPage } from '../eventos/eventos';
import { HomePage } from '../home/home';
import { GaleriaPage } from '../galeria/galeria';
import { ListasPage } from '../listas/listas';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SlideMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide-menu',
  templateUrl: 'slide-menu.html',
})
export class SlideMenuPage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = EventosPage;
  public pages: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { titulo: "Tablon", componente: HomePage, icono: "home" },
      { titulo: "Galería", componente: GaleriaPage, icono: "images" },
      { titulo: "Eventos", componente: EventosPage, icono: "calendar" },
      { titulo: "Listas", componente: ListasPage, icono: "create" }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlideMenuPage');
  }
  abrirPagina(page: any) {
    this.nav.setRoot(page.componente);
  }
  logOut() {
    this.nav.setRoot(LoginPage);
  }

}
