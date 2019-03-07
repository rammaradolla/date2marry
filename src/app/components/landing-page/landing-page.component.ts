import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiCallingService } from "../../services/api-calling.service";
import { UserProfileSummary } from "../../models/userProfileSummary";
import { AppStateService } from "../../services/app-state.service";
import { PhotoCardComponent } from "../photo-card/photo-card.component";
import { UserProfile } from "../../models/userProfile";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing-page-container",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  usersProfile: UserProfile[];
  constructor(
    private apiCallingService: ApiCallingService,
    private appStateService: AppStateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getFullProfiles();
  }

  getSummaryProfiles() {
    this.apiCallingService
      .getSummaryProfiles()
      .subscribe((usersProfileSummary: UserProfileSummary[]) => {
        this.appStateService.usersProfileSummary = usersProfileSummary;
        // console.log(this.appStateService.usersProfileSummary);
      });
  }

  getFullProfiles() {
    this.apiCallingService
      .getFullProfiles()
      .subscribe((usersProfile: UserProfile[]) => {
        this.appStateService.usersProfile = usersProfile;
        this.usersProfile = this.appStateService.usersProfile;
      });
  }
}
