import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private searchQuerySubject = new Subject<string>();
  searchQuery$ = this.searchQuerySubject.asObservable();
  constructor() {}
  sendSearchQuery(result: any) {
    this.searchQuerySubject.next(result);
  }
}
