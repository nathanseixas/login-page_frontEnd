import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCLient: HttpClient) { }

  login(name: string, password: string) {
    return this.httpCLient.post("/login", {name, password})
  }

}
