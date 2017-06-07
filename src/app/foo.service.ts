import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class FooService {

  constructor(private http: Http) { }

  getMessage(): Observable<string> {
    return this.http.get('/api/message').map(res => res.text());
  }

  get400(): Observable<string> {
    return this.http.get('/api/auth').map(res => res.text());
  }

  getHandled400(): Observable<string> {
    return this.http.get('/api/auth')
      .map(res => res.text())
      .catch(e => {
        console.log('service caught error');
        console.log(e);
        return Observable.of('ok from service XD');
      });
  }
}
