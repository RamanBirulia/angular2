import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import * as _ from 'lodash';


@Injectable()
export class CategoryService {

  constructor(private restService: RestService) { }

  categoriesUrl = 'accounts';
  categoryUrl = 'account/';

  getAll() {
    // return this.restService.get(this.categoriesUrl);
    return [
      {name: 'Food', id: 1},
      {name: 'Car', id: 2},
      {name: 'Household goods', id: 3}
    ]
  }

  get(id: number) {
    return this.restService.get(this.categoryUrl + id);
  }

  create(obj: object) {
    return this.restService.post(this.categoryUrl, obj);
  }

  update(obj: object) {
    return this.restService.post(this.categoryUrl + _.get(obj,'id'), obj);
  }

  delete(id: number) {
    return this.restService.delete(this.categoryUrl + id);
  }
}
