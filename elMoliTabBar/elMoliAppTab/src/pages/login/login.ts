import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Events, Platform } from 'ionic-angular';
import { UserModel } from '../../modelos/user.model';
import { AuthProvider } from '../../providers/auth';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { NativeStorage } from '@ionic-native/native-storage';


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
    public lodingCtrl: LoadingController, public alertCtrl: AlertController, public authProvier: AuthProvider,
    public eventLogin: Events, public nativeStorage: NativeStorage, public platform: Platform) {

    this.userModel = new UserModel();
  }
  signIn() {
    let loading = this.lodingCtrl.create({
      content: 'Iniciando sesión. Por favor espere...'
    });
    loading.present();

    this.authProvier.signInWithEmailAndPassword(this.userModel).then(result => {
      console.log(this.userModel);
      if (this.platform.is('cordova')) {
        this.nativeStorage.setItem('credentials',this.userModel);
      }else {
        localStorage.setItem('emailCredentials',this.userModel.email);
        localStorage.setItem('passCredentials',this.userModel.password);
      }
      
      this.eventLogin.publish('user:login');
      loading.dismiss();
      this.navCtrl.setRoot(HomePage);
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
