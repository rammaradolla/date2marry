import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ConstantsService } from "../../services/constants.service";
import { ApiCallingService } from "../../services/api-calling.service";
import { User } from "../../models/userModel";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

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
    private router: Router
  ) {}

  signinForm = this.fb.group({
    userName: ["", Validators.required],
    password: ["", Validators.required]
  });

  ngOnInit() {}
  signin() {
    this.router.navigate(["home"]);
  }
}
