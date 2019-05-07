import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GaleriaPage } from '../pages/galeria/galeria';
import { EventosPage } from '../pages/eventos/eventos';
import { ListasPage } from '../pages/listas/listas';
import { ServicesTablonProvider } from '../providers/services-tablon';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import {HttpClientModule} from "@angular/common/http";
import { EventoProvider } from '../providers/evento';
import { ListaProvider } from '../providers/lista';
import { LoginPage } from '../pages/login/login';
import { VerNoticiaPage } from '../pages/ver-noticia/ver-noticia';

export const firebase = {
  apiKey: "AIzaSyBMD06uvsgPTd31LAUmHtMrPTAM3MdeuTY",
  authDomain: "fallaelmoli-3fdb8.firebaseapp.com",
  databaseURL: "https://fallaelmoli-3fdb8.firebaseio.com",
  projectId: "fallaelmoli-3fdb8",
  storageBucket: "fallaelmoli-3fdb8.appspot.com",
  messagingSenderId: "727082792199"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    GaleriaPage,
    EventosPage,
    ListasPage,
    LoginPage,
    VerNoticiaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    GaleriaPage,
    EventosPage,
    ListasPage,
    VerNoticiaPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    ServicesTablonProvider,
    AngularFireDatabase,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventoProvider,
    ListaProvider
    
  ]
})
export class AppModule {}
