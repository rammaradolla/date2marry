import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ConstantsService } from "../../services/constants.service";
import { ApiCallingService } from "../../services/api-calling.service";
import { User } from "../../models/userModel";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { AppStateService } from "../../services/app-state.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public constantsService: ConstantsService,
    private apiCallingService: ApiCallingService,
    private snackBar: MatSnackBar,
    private router: Router,
    private appStateService: AppStateService
  ) {}

  signinForm = this.fb.group({
    userName: ["", Validators.required],
    password: ["", Validators.required]
  });

  ngOnInit() {
    this.appStateService.loggedInUser = null;
  }
  signin() {
    const user = new User();
    user.firstName = this.signinForm.value.userName;
    this.snackBar.open(this.constantsService.messages.signin.success, "Ok", {
      duration: 3000
    });
    this.appStateService.loggedInUser = user;
    this.router.navigate(["onlineUsers"]);
  }
}
