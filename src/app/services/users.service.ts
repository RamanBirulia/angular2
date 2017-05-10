import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';

@Injectable()
export class UserService {

  private usersUrl = 'api/users';
  public users = [];

  constructor(private restService: RestService) { }

  getAll() {
    return this.restService.get(this.usersUrl)
      .map(response => response.json())
      .do((data)=> {
        this.users = data;
        return data;
      })
  }

  getUser(id: number) {
    return this.restService.get(this.usersUrl +  '/' +id)
      .map(response => response.json())
      .do( (data)=>{
        return data;
      })
  }

  createUser(userData: object) {
    return this.restService.post(this.usersUrl, userData)
      .map(response => response.json())
      .do( (data) => {
        this.users.push(data);
      });
  }

  updateUser(userData: object) {
    let self = this;
    let url = this.usersUrl + '/' + _.get(userData, 'id');
    return this.restService.put(url, userData)
      .map(response => response.json())
      .do(
        ( data ) => {
          let oldUser = _.find(self.users, {id: _.get(userData, 'id')});
          _.assign(oldUser, data);
          return data;
        }
      );
  }

  deleteUser(id: number) {
    let self = this;
    return this.restService.delete(this.usersUrl +  '/' +id)
      .do((data)=>{
        _.remove(self.users, (item)=>{ return item.id === id });
        return data;
      })
  }
}
