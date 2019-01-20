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
  constructor() { }

  /* Labels */
  OK_BUTTON_LABEL = 'Ok';


// Messages
ARE_YOU_SURE = `Are you sure?`;
}
