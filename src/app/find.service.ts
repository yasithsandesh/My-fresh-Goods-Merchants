import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  viewStatus: boolean;

  private viewStatusListener =  new Subject<boolean>()

  constructor() {

    this.viewStatus = false;

  }

  getViewStatusListener(): Observable<boolean> {
    return this.viewStatusListener.asObservable();
  }

  setView(status:boolean){
    this.viewStatusListener.next(status)
  }
}
