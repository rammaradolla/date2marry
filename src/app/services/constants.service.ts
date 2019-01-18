import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { MessageService } from './message.service';
import { EndPointUrls } from '../models/end-point-urls';


@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  getBrandNames(): Observable<{}> {
    return this.httpClient.get<{}>(this.getEndPointUrls().sampleEndPointUrl)
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

  getEndPointUrls(): EndPointUrls {
    const endPointUrls: EndPointUrls = new EndPointUrls;
    const baseURL = window.location.origin;
    if (baseURL.indexOf('localhost') > -1) {
      endPointUrls.sampleEndPointUrl = 'http://localhost:3000/componentJsonSchema';
      return endPointUrls;
    } else {
      endPointUrls.sampleEndPointUrl = '';
      return endPointUrls;
    }
  }

}
