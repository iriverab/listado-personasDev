import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authenticationService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    const email : string = form.value.email;
    const password: string = form.value.password;
    console.log(form);
    console.log(`pass ${password}`);
    this.authService.SignIn(email, password);
  }
}
