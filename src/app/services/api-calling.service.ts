import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { MessageService } from './message.service';
import { EndPointUrls } from '../models/end-point-urls';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getSummaryProfiles(gender): Observable<{}> {
    return this.httpClient.get<{}>(this.getEndPointUrls().lady)
      .pipe(
        tap(data => console.log('List of Brand Names', data)),
        catchError(this.handleError('data', {}))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed`, error.status, 'serverError');
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private getEndPointUrls(): EndPointUrls {
    const endPointUrls: EndPointUrls = new EndPointUrls;
    const baseURL = window.location.origin;
    if (baseURL.indexOf('localhost') > -1) {
      endPointUrls.lady = 'http://localhost:3000/lady';
      endPointUrls.man = 'http://localhost:3000/man';
      endPointUrls.user = 'http://localhost:3000/users/{{userid}}';
      return endPointUrls;
    } else {
      endPointUrls.lady = 'https://api.anastasiadate.com/v2/smiles/lady';
      endPointUrls.man = 'https://api.anastasiadate.com/v2/smiles/man';
      endPointUrls.user = 'https://cp.anastasiadate.com/users/{{userid}}';
      return endPointUrls;
    }
  }

}
