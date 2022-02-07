import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  public signIn(email:string, password:string) { 
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  public signUp(email:string, password:string) {
    return this.afAuth.createUserWithEmailAndPassword(email,password)
      .then((result) => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
