import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from 'firebase';
import { Clientes } from '../modelos/clientes';
import firebase from 'firebase';
import { UserModel } from '../modelos/user.model';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona.model';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private user: User;
  public cliente:Clientes;
  
  constructor(public http: HttpClient, public angularFireAuth: AngularFireAuth, private afBD: AngularFirestore) {
    console.log('Hello AuthProvider Provider');

    angularFireAuth.authState.subscribe((user: User) => {
      this.user = user;
    });
  }
  getCurrentUser() {
    firebase.auth().onAuthStateChanged(function(u){
      if (u){
        //User is signed in
        this.cliente.tipo = "default";
        this.cliente.email = u.email;
        this.cliente.uid = u.uid;
      }
    });
  }
getUsuario(): any{
  firebase.auth().onAuthStateChanged(res => {
    return res;
  },
  err => {
    throw new Error(err.message);
  });
}
  signInWithEmailAndPassword(userModel: UserModel): Promise<any>{
    return this.angularFireAuth.auth.signInWithEmailAndPassword(userModel.email, userModel.password);
  }

  getAuthenticated():boolean{
    return this.user != null;
  }

  signOut():Promise<any>{
    return this.angularFireAuth.auth.signOut();
  }
}
