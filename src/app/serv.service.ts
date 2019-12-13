import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  value: string = "component started";

  constructor() { }

  getSingleValueObservable() {
    return of('single value');
  }
  
  getDelayedValueObservable() {
    return of('delayed value').pipe(delay(2000));
  }
  
  getMultiValueObservable() {
    return new Observable<number>(observer => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next(count++);
        console.log('interval fired');
      }, 1000);
  
      return () => {
        clearInterval(interval);
      }
    });
  }

}

export function getSingleValueObservableAsync() {
  return of('single value');
}

export function getDelayedValueObservableAsync() {
  return of('delayed value').pipe(delay(2000));
}

export function getMultiValueObservableAsync() {
  return new Observable<number>(observer => {
    let count = 0;
    const interval = setInterval(() => {      
      observer.next(count++);
      //console.log('interval fired');
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  });
}

export class ConfigService {

  configString: "XXX"

}

