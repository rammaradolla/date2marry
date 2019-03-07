import { Component, OnInit } from "@angular/core";
import { ConstantsService } from "../../services/constants.service";
import { ApiCallingService } from "../../services/api-calling.service";
import { MatSnackBar } from "@angular/material";
import { User } from "../../models/userModel";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  usersList: User[];
  constructor(
    public constantsService: ConstantsService,
    private apiCallingService: ApiCallingService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getUsersList(1, 5);
  }
  getUsersList(start, count) {
    this.apiCallingService
      .getUsersList(start, count)
      .subscribe((usersList: User[]) => {
        this.usersList = usersList;
        console.log(JSON.stringify(usersList));
        this.snackBar.open(
          this.constantsService.messages.accountCreation.success,
          "Ok",
          {
            duration: 3000
          }
        );
      });
  }
}
