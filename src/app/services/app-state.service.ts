import { Injectable } from '@angular/core';
import { UserProfileSummary } from '../models/userProfileSummary';
import { UserProfile } from '../models/userProfile';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  usersProfileSummary: UserProfileSummary[];
  usersProfile: UserProfile[];
  constructor() { }
}
