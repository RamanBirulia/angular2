import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import * as _ from 'lodash';


@Injectable()
export class AccountService {
  constructor(private restService: RestService) { }

  accountsUrl = 'api/accounts';
  accountUrl = 'api/account/';

  getAll() {
    return this.restService.get(this.accountsUrl)
      .map(response => response.json());
  }

  get(id: number) {
    return this.restService.get(this.accountUrl + id)
      .map(response => response.json());
  }

  create(obj: object) {
    return this.restService.post(this.accountsUrl, obj)
      .map(response => response.json());
  }

  update(obj: object) {
    return this.restService.post(this.accountUrl + _.get(obj,'id'), obj)
      .map(response => response.json());
  }

  delete(id: number) {
    return this.restService.delete(this.accountUrl + id)
      .map(response => response.json());
  }

}
