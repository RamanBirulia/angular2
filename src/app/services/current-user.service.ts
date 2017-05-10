import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import * as _ from "lodash";

@Injectable()
export class CurrentUserService {

  constructor(
    private restService: RestService,
    private router: Router,) { }

  private myInfoUrl = 'api/users/me';
  currentUser = { accounts: [] };

  set(data: object){
    _.assign(this.currentUser, data);
  }

  get() {
    return this.currentUser;
  }

  addAccount(obj: object) {
    this.currentUser.accounts.push(obj);
  }

  loadData(){
    return this.restService.get(this.myInfoUrl)
      .map(response => response.json())
      .catch(( error )=>{
        this.router.navigateByUrl('login');
        return Observable.throw(error);
      })
  }

  clear(){
    this.currentUser = { accounts: [] };
  }

}
