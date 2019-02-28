import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap, retry } from "rxjs/operators";

import { MessageService } from "./message.service";
import { EndPointUrls } from "../models/end-point-urls";
import { LoggingService } from "./logging.service";
import { User } from "../models/userModel";

@Injectable({
  providedIn: "root"
})
export class ApiCallingService {
  basicHttpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "localhost:4200"
    })
  };
  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService,
    private loggingService: LoggingService
  ) {}

  /**
   * Function to return end point urls based on environment.
   */
  private getEndPointUrls(): EndPointUrls {
    const endPointUrls: EndPointUrls = new EndPointUrls();
    const baseURL = window.location.origin;
    if (baseURL.indexOf("localhost") > -1) {
      endPointUrls.users = "http://localhost:3000/users";
      endPointUrls.usersFullProfile = "http://localhost:3000/usersFullProfile";
      endPointUrls.getUserPhotoIds = "http://localhost:3000/getUserPhotoIds";
      endPointUrls.userSave = "http://localhost:8082/user/save";
      return endPointUrls;
    } else {
      endPointUrls.users = "https://api.anastasiadate.com/v2/smiles/users";
      endPointUrls.usersFullProfile =
        "https://cp.anastasiadate.com/usersFullProfile";
      endPointUrls.getUserPhotoIds =
        "https://api6.anastasiadate.com/v2/ladies/1950455/photos";
      endPointUrls.userSave = "http://localhost:8082/user/save";
      return endPointUrls;
    }
  }

  /**
   * Function to get users summary profile.
   */
  getSummaryProfiles(): Observable<{}> {
    return this.httpClient.get<{}>(this.getEndPointUrls().users).pipe(
      // tap(data => console.log('List of Brand Names', data)),
      catchError(this.handleError("data", {}))
    );
  }

  /**
   * Function to get users Full Profile.
   */
  getFullProfiles(): Observable<{}> {
    return this.httpClient
      .get<{}>(this.getEndPointUrls().usersFullProfile)
      .pipe(catchError(this.handleError("data", {})));
  }

  /**
   * Function to get photo id's of user based on user id.
   */
  getPhotoIds(userId): Observable<{}> {
    return this.httpClient
      .get<{}>(this.getEndPointUrls().getUserPhotoIds)
      .pipe(catchError(this.handleError("data", {})));
  }

  /**
   * Function to create, save and update user
   */
  saveUser(user): Observable<{}> {
    return this.httpClient
      .post<{}>(this.getEndPointUrls().userSave, user, this.basicHttpOptions)
      .pipe(
        tap(response => console.log("user save response", response)),
        catchError(this.handleError("data", {}))
      );
  }

  /**
   * Function to handel errors for all api end point calls.
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      if (error.error instanceof ErrorEvent) {
        // client-side error
        this.loggingService.logMessage(
          `Client Error: ${error.error.message}`,
          error.status,
          "Error"
        );
      } else {
        // server-side error
        this.loggingService.logMessage(
          `Server Error Code: ${error.status}\nMessage: ${error.message}`,
          error.status,
          "Error"
        );
      }
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
