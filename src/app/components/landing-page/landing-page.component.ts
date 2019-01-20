import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from '../../services/api-calling.service';
import { UserProfileSummary } from '../../models/userProfileSummary';

@Component({
  selector: 'app-landing-page-container',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private apiCallingService:ApiCallingService) { }

  ngOnInit() {
    this.apiCallingService.getSummaryProfiles("female")
    .subscribe((usersProfileSummary:UserProfileSummary[]) => {
        console.log(usersProfileSummary);
    })
  }
}
