import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Platform, Nav, LoadingController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EventosPage } from '../pages/eventos/eventos';
import { GaleriaPage } from '../pages/galeria/galeria';
import { ListasPage } from '../pages/listas/listas';
import { LoginPage } from '../pages/login/login';
import { Persona } from '../modelos/persona.model';
import { AuthProvider } from '../providers/auth';
//import firebase from 'firebase';
import { NativeStorage } from '@ionic-native/native-storage';
import { UserModel } from '../modelos/user.model';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit, OnDestroy {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  public pages: any[] = [];
  public usuario: Persona;
  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth_: AuthProvider, public loadingCtrl: LoadingController,
    public eventLogin: Events, public nativeStorage: NativeStorage) {
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
  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    if (this.platform.is('cordova')) {
      this.nativeStorage.getItem('credentials').then(credentials => {
        this.auth_.signInWithEmailAndPassword(credentials);
      });

    } else {
      let user: UserModel = new UserModel();
      user.email = localStorage.getItem('emailCredentials');
      user.password = localStorage.getItem('passCredentials');
      console.log(user);
      if (user) {
        console.log('Login con localStorage');
        this.auth_.signInWithEmailAndPassword(user);
      }
    }
    this.getUsuario();
    this.rootPage = HomePage;
  }


  abrirPagina(page: any) {
    this.nav.setRoot(page.componente);
  }

  logOut() {
    this.auth_.signOut().then(res => {
      this.presentLoading("Cerrando sesion...");
      this.usuario = null;
      //this.nav.setRoot(LoginPage);
    });

  }

  presentLoading(text: string) {
    const loader = this.loadingCtrl.create({
      content: text,
      duration: 2000
    });
    loader.present().then(succes => {
      this.rootPage = HomePage;
    });
  }

  goToLogin() {
    this.nav.push(LoginPage);
  }
  getUsuario() {
    if (this.auth_.getAuthenticated()) {
      this.auth_.angularFireAuth.user.subscribe(res => {
        console.log(res);
        if (this.usuario === undefined) {
          this.usuario = new Persona();
        }
        this.usuario.nombre = res.displayName;
        this.usuario.uid = res.uid;
      });
    }
  }

  loadApp() {
    this.rootPage = HomePage;
    /*
    this.eventLogin.subscribe('user:login', () => {
      this.auth_.angularFireAuth.user.subscribe(res => {
        console.log(res);
        if (this.usuario === undefined) {
          this.usuario = new Persona();
        }
        this.usuario.nombre = res.email;
        this.usuario.uid = res.uid;
      });
    });
    */
  }
}
