import { Injectable } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap, retry } from "rxjs/operators";

import { MessageService } from "./message.service";
import { EndPointUrls } from "../models/end-point-urls";

@Injectable({
  providedIn: "root"
})
export class ConstantsService {
  constructor() {}

  /* Titles */
  titles = {
    createAccountCardTitle: "JOIN THE SECURE & EASY WAY"
  };
  /* Labels */
  labels = {
    iama: "I'm a",
    firstName: "First Name",
    lastName: "Last Name",
    userName: "UserName",
    password: "Password",
    createAccountSubmitBtn: "FIND YOUR MATCHES",
    signinBtn: "SIGN IN"
  };

  /* Dropdown values */
  dropdown = {
    iama: ["Man Seeking a Woman", "Woman Seeking a Man"]
  };
  /* Error Messages */
  errorMessages = {
    required: {
      iama: "lease select your gender",
      firstName: "Please enter first name",
      lastName: "Please enter last name",
      userName: "Please enter username",
      password: "Please enter password"
    }
  };

  /* Messages */

  messages = {
    accountCreation: {
      success: "User account has been created successfully"
    },
    signin: {
      success: "User signed in successfully"
    }
  };
}
