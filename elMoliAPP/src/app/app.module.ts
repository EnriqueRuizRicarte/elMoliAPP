import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

<<<<<<< HEAD
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
=======
// Angular FireBase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { NoticiaService } from './providers/noticia.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBMD06uvsgPTd31LAUmHtMrPTAM3MdeuTY",
  authDomain: "fallaelmoli-3fdb8.firebaseapp.com",
  databaseURL: "https://fallaelmoli-3fdb8.firebaseio.com",
  projectId: "fallaelmoli-3fdb8",
  storageBucket: "fallaelmoli-3fdb8.appspot.com",
  messagingSenderId: "727082792199"
};

@NgModule({
  declarations: [
    AppComponent
  ],

  entryComponents: [

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    AngularFirestoreModule
>>>>>>> tabBar
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
=======
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NoticiaService,
    AngularFireModule,
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> tabBar
