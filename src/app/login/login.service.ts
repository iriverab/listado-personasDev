import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from "./authenticationService.service";


@Injectable()
export class LoginService {
    token: string;

    constructor(private authService : AuthenticationService) { }

    login(email: string, password: string) {
        this.authService.SignIn(email, password);
    }
}