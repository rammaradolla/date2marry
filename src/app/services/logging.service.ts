import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class LoggingService {
    constructor() {

    }
    private messages: string[] = [];

    /**
     * Function to call success or failure log functions based on 'type'.
     */
    public logMessage(message: string, status: number, type: string) {
        if (type === 'Error') {
            this.failureGA(message, status);
        }
        if (type === 'sucess') {
            this.successGA(message, status);
        }
    }

    /**
     * Function to log 'success' messages.
     */
    private successGA(message: string, status: number) {
        console.log(message, status);
    }

    /**
     * Function to log 'failure' messages.
     */
    private failureGA(message: string, status: number) {
        console.error(message, status);
    }
}
