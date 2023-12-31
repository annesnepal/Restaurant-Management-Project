import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://restro-nm19.onrender.com/user';
  constructor(private http: HttpClient, private router: Router) {}

  addUser(data: any) {
    return this.http.post(this.baseUrl, data);
  }
  findUser() {
    return this.http.get<any[]>(this.baseUrl);
  }
  setToken() {
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwicGFzc3dvcmQiOiJhZG1pbjEyMyIsImlhdCI6MTUxNjIzOTAyMn0.061TdGw7AyP0vsevFg63YmHhJj0vjhrhyL54DEz58Fo'
    );
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
