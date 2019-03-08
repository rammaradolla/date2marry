import { Component, OnInit } from "@angular/core";
import { AppStateService } from "../../services/app-state.service";

@Component({
  selector: "app-user-settings",
  templateUrl: "./user-settings.component.html",
  styleUrls: ["./user-settings.component.scss"]
})
export class UserSettingsComponent implements OnInit {
  constructor(public appStateService: AppStateService) {}

  ngOnInit() {}
}
