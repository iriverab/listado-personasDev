import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AuthenticationService } from './login/authenticationService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyC16SE-sp61Un-qyz3vO-jK54uIhcujjhM',
      authDomain: 'listado-personas-1eb0a.firebaseapp.com',
    });
  }

  isAutenticado() {
    return this.authService.isAutenticado();
  }


  salir() {
    this.authService.SignOut();
  }
}
