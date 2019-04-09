import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseFirestore } from '@angular/fire';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: any;
  constructor(public navCtrl: NavController, public afDB:FirebaseFirestore) {
     this.items = this.afDB.collection('noticias').get();
     console.log(this.items);
  }

}
