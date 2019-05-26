import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { UserModel } from '../../modelos/user.model';
import { AuthProvider } from '../../providers/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userModel: UserModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public lodingCtrl: LoadingController, public alertCtrl: AlertController, public authProvier: AuthProvider) {

    this.userModel = new UserModel();
  }
  signIn() {
    let loading = this.lodingCtrl.create({
      content: 'Iniciando sesión. Por favor espere...'
    });
    loading.present();

    this.authProvier.signInWithEmailAndPassword(this.userModel).then(result => {
      loading.dismiss();
      this.navCtrl.setRoot(TabsPage);
    }).catch(err => {
      loading.dismiss();
      console.log(err);
      this.alert('Error','Ha ocurrido un error inesperado. Por favor intente nuevamente.');

    });
  }
  alert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons:['ACEPTAR']
    });
    alert.present();
  }
  /*  ionViewDidLoad() {
     console.log('ionViewDidLoad LoginPage');
   } */

   signUp() {
    this.alert('Falla el Moli','Si quiere una cuenta póngase en contacto con nosotros.');
  }
}
