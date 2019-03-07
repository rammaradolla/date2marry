import { Component, OnInit } from "@angular/core";
import { User } from "../../models/userModel";
import { ApiCallingService } from "../../services/api-calling.service";
import { AppStateService } from "../../services/app-state.service";
import { PhotoCardComponent } from "../photo-card/photo-card.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-online-users",
  templateUrl: "./online-users.component.html",
  styleUrls: ["./online-users.component.scss"]
})
export class OnlineUsersComponent implements OnInit {
  onlineUsers: User[];
  constructor(
    private apiCallingService: ApiCallingService,
    private appStateService: AppStateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getOnlineUsers(1, 20);
  }

  getOnlineUsers(start, count) {
    this.apiCallingService
      .getOnlineUsers(start, count)
      .subscribe((users: User[]) => {
        this.appStateService.onlineUsers = users;
        this.onlineUsers = this.appStateService.onlineUsers;
      });
  }

  onUserSelect(user: User) {
    this.router.navigate(["userDetail"]);
  }
}
