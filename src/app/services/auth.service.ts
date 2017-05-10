import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { RestService } from './rest.service';

@Injectable()
export class AuthService implements CanActivate{
  private loginUrl = 'api/login';
  private signUpUrl = 'api/register';
  private restorePasswordUrl = 'restore-password';

  constructor(
    private http: Http,
    private restService: RestService,
    private router: Router ) {}

  login(loginData){
    return this.http.post(this.loginUrl, loginData)
      .map(response => response.json())
      .subscribe((data)=>{
        this.restService.setAuthToken(data.token);
        this.router.navigateByUrl('');
      });
  }

  logout(){
    this.restService.removeAuthToken();
  }

  register(registerData){
    return this.http.post(this.signUpUrl, registerData)
      .map(response => response.json())
      .subscribe(
        ( data )=>{ this.restService.setAuthToken(data.token); this.router.navigateByUrl('');},
        ( error ) => alert( error )
      );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.restService.getAuthToken()){
      this.router.navigateByUrl('login');
    }
    return !!this.restService.getAuthToken();
  }
}

