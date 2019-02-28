import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { ConstantsService } from "../../services/constants.service";
import { ApiCallingService } from "../../services/api-calling.service";
import { User } from "../../models/userModel";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.scss"]
})
export class CreateAccountComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public constantsService: ConstantsService,
    private apiCallingService: ApiCallingService
  ) {}

  createAccountForm = this.fb.group({
    //iama: ["", Validators.required],
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
      });
  }
}
