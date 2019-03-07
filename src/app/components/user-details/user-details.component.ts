import { Component, OnInit } from "@angular/core";
import { AppStateService } from "../../services/app-state.service";
import { User } from "../../models/userModel";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  selectedUser: User;
  constructor(private appStateService: AppStateService) {}

  ngOnInit() {
    this.selectedUser = this.appStateService.selectedUser;
  }
}
