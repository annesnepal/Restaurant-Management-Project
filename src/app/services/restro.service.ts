import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../components/model/restaurant';
@Injectable({
  providedIn: 'root',
})
export class RestroService {
  url = 'http://localhost:3000/restaurant-details';
  constructor(private http: HttpClient) {}
  getList(): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.url);
  }
  saveRestro(data: any) {
    return this.http.post(this.url, data);
  }
  deleteRestro(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentRestro(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateRestro(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
