import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Restaurant } from '../components/model/restaurant';
@Injectable({
  providedIn: 'root',
})
export class RestroService {
  url = 'https://restro-nm19.onrender.com/restaurant-details';
  private formSubject = new Subject<string>();
  formSubject$ = this.formSubject.asObservable();
  constructor(private http: HttpClient) {}

  getList(): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.url);
  }
  saveRestro(data: any) {
    return this.http.post(this.url, data);
  }
  deleteRestro(id: number): Observable<Restaurant> {
    return this.http.delete<Restaurant>(`${this.url}/${id}`);
  }
  getCurrentRestro(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${this.url}/${id}`);
  }
  updateRestro(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
