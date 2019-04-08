import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: Observable<any[]>;
  constructor(public navCtrl: NavController, public afDB: AngularFireDatabase) {
    this.items = this.afDB.list('noticias').valueChanges();
  }

}
