import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class RestService {

  constructor(private http: Http) { }

  getAuthToken() :string {
    return localStorage.getItem('token');
  }

  setAuthToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeAuthToken(){
    localStorage.removeItem('token');
  }

  get(url: string){
    return this.http.get(url, {headers: this.authHeader()});
  }

  post(url: string, body: object){
    return this.http.post(url + '/', body, {headers: this.authHeader()});
  }

  delete(url: string){
    return this.http.delete(url, {headers: this.authHeader()});
  }

  put(url: string, body: object){

    return this.http.put(url + '/', body, {headers: this.authHeader()});
  }

  authHeader() {
    let headers = new Headers();
    headers.append('Authorization', 'JWT ' + this.getAuthToken());
    return headers;
  }
}
