import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
  //userData: Observable<firebase.user>;
  token: string | null;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    //this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('You are Successfully signed up!', res);
      })
      .catch((error) => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.angularFireAuth.idToken.subscribe((token) => {
          this.token = token;
          this.router.navigate(['/']);
          //console.log(this.token);
        });
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
      });
  }

  getIdToken() {
    return this.token;
    }
    
    isAutenticado() {
        return this.token != null;
    }

  /* Sign out */
  SignOut() {
      this.angularFireAuth.signOut().then(
          () => {
              this.token = null;
              console.log("Fuera");
              this.router.navigate(['login']);      
          }
      ).catch(error=>console.log("Error Logout"))
  }
}
