import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "./authenticationService.service";

@Injectable()
export class LoginGuardian implements CanActivate {

    constructor(private authService: AuthenticationService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAutenticado()) {
            return true;
        }
        else {
            this.router.navigate(["login"]);
            return false;
        }
    }
 }