import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';

import { MessageService } from './message.service';
import { EndPointUrls } from '../models/end-point-urls';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {

  constructor(private httpClient: HttpClient, private messageService: MessageService, private loggingService: LoggingService) { }
 /**
  * Function to get users summary profile.
  */
  getSummaryProfiles(): Observable<{}> {
    return this.httpClient.get<{}>(this.getEndPointUrls().users)
      .pipe(
       // tap(data => console.log('List of Brand Names', data)),
        catchError(this.handleError('data', {}))
      );
  }

 /**
  * Function to get users Full Profile.
  */
 getFullProfiles(): Observable<{}> {
    return this.httpClient.get<{}>(this.getEndPointUrls().usersFullProfile)
      .pipe(
        catchError(this.handleError('data', {}))
      );
  }

  /**
  * Function to handel errors for all api end point calls.
  */
 private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    if (error.error instanceof ErrorEvent) {
      // client-side error
      this.loggingService.logMessage(`Client Error: ${error.error.message}`, error.status, 'Error');
    } else {
      // server-side error
      this.loggingService.logMessage(`Server Error Code: ${error.status}\nMessage: ${error.message}`, error.status, 'Error');
    }
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  private getEndPointUrls(): EndPointUrls {
    const endPointUrls: EndPointUrls = new EndPointUrls;
    const baseURL = window.location.origin;
    if (baseURL.indexOf('localhost') > -1) {
      endPointUrls.users = 'http://localhost:3000/users';
      endPointUrls.usersFullProfile = 'http://localhost:3000/usersFullProfile';
      endPointUrls.getUserPhotoIds = 'http://localhost:3000/getUserPhotoIds';
      return endPointUrls;
    } else {
      endPointUrls.users = 'https://api.anastasiadate.com/v2/smiles/users';
      endPointUrls.usersFullProfile = 'https://cp.anastasiadate.com/usersFullProfile';
      endPointUrls.getUserPhotoIds = 'https://api6.anastasiadate.com/v2/ladies/1950455/photos';
      //photo's url  https://api6.anastasiadate.com/v2/ladies/1950455/photos/54ca0d3baa94.316x450.gallery
      return endPointUrls;
    }
  }

}
