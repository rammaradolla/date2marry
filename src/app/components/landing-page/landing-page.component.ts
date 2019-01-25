import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiCallingService } from '../../services/api-calling.service';
import { UserProfileSummary } from '../../models/userProfileSummary';
import { AppStateService } from '../../services/app-state.service';
import { PhotoCardComponent } from '../photo-card/photo-card.component';
import { UserProfile } from '../../models/userProfile';

@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private apiCallingService:ApiCallingService, private appStateService: AppStateService) { }

  ngOnInit() {
    this.getFullProfiles();
  }

  getSummaryProfiles() {
    this.apiCallingService.getSummaryProfiles()
    .subscribe((usersProfileSummary:UserProfileSummary[]) => {
      this.appStateService.usersProfileSummary = usersProfileSummary;
      // console.log(this.appStateService.usersProfileSummary);
    });
  }

  getFullProfiles() {
    this.apiCallingService.getFullProfiles()
    .subscribe((usersProfile:UserProfile[]) => {
      this.appStateService.usersProfile = usersProfile;
      console.log(this.appStateService.usersProfile);
    })
  }

}
