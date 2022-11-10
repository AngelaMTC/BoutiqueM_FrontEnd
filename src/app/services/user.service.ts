import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../interface/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'https://boutiquemaribel.herokuapp.com/api/user/';
  constructor(private http: HttpClient) {}

  postLogin(login: UserLogin) {
    return this.http.post(`${this.url}login/`, login);
  }
}
