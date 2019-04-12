import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { Observable, of } from "rxjs";
import { stringToKeyValue } from "@angular/flex-layout/extended/typings/style/style-transforms";
import { ObserversModule } from "@angular/cdk/observers";
import { ChatObject, UserChatHistory } from "./chat.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private socket = io("http://localhost:3001");
  x: string = this.socket.id;

  constructor(private httpClient: HttpClient) {}

  joinRoom(data) {
    this.socket.emit("join", data);
    console.log(this.x);
  }

  onConnect() {
    const observable = new Observable<any>(observer => {
      this.socket.on("connect", data => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  mapSocketWithUser(loggedInUser) {
    console.log(loggedInUser.firstName);
    this.socket.emit("mapSocketWithUser", loggedInUser);
  }

  newUserJoined() {
    const observable = new Observable<{ user: string; message: string }>(
      observer => {
        this.socket.on("new user joined", data => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );
    return observable;
  }

  leaveRoom(data) {
    this.socket.emit("leave", data);
  }

  userLeftRoom() {
    const observable = new Observable<{ user: string; message: string }>(
      observer => {
        this.socket.on("left room", data => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );
    return observable;
  }

  sendMessage(data) {
    this.socket.emit("message", data);
  }

  newMessageReceived() {
    const observable = new Observable<ChatObject>(observer => {
      this.socket.on("new message", (chatObject: ChatObject) => {
        observer.next(chatObject);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  getChatHistory(userId): Observable<UserChatHistory | {}> {
    return this.httpClient
      .get<UserChatHistory>(`http://localhost:3000/chatDB/${userId}`)
      .pipe(
        tap(data => console.log("sandbox search response", data)),
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
      } else {
        // server-side error
      }
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
