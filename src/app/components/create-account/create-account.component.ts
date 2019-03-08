import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ConstantsService } from "../../services/constants.service";
import { ApiCallingService } from "../../services/api-calling.service";
import { User } from "../../models/userModel";
import { MatSnackBar } from "@angular/material";
import { AppStateService } from "../../services/app-state.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.scss"]
})
export class CreateAccountComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public constantsService: ConstantsService,
    private apiCallingService: ApiCallingService,
    private snackBar: MatSnackBar,
    private appStateService: AppStateService,
    private router: Router
  ) {}

  createAccountForm = this.fb.group({
    iama: [""],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    password: ["", Validators.required]
  });

  ngOnInit() {}

  createAccount() {
    this.apiCallingService
      .saveUser(this.createAccountForm.value)
      .subscribe((user: User) => {
        console.log(JSON.stringify(user));
        this.snackBar.open(
          `${
            this.constantsService.messages.accountCreation.success
          }, User Id: ${user.id}`,
          "Ok",
          {
            duration: 6000
          }
        );
        this.appStateService.loggedInUser = user;
        this.router.navigate(["onlineUsers"]);
      });
  }
}
