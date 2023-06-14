import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {}

  addUser(data: any) {
    return this.http.post(this.url, data);
  }
  findUser() {
    return this.http.get<any[]>(this.url);
  }
}
