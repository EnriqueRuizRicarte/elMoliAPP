import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EventosPage } from '../pages/eventos/eventos';
import { GaleriaPage } from '../pages/galeria/galeria';
import { ListasPage } from '../pages/listas/listas';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = EventosPage;
  public pages: any[] = [];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { titulo: "Tablon", componente: HomePage, icono: "home" },
      { titulo: "Galería", componente: GaleriaPage, icono: "images" },
      { titulo: "Eventos", componente: EventosPage, icono: "calendar" },
      { titulo: "Listas", componente: ListasPage, icono: "create" }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  abrirPagina(page: any) {
    this.nav.setRoot(page.componente);
  }
  logOut() {
    this.nav.setRoot(LoginPage);
  }
}
