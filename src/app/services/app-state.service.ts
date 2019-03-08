import { Injectable } from "@angular/core";
import { UserProfileSummary } from "../models/userProfileSummary";
import { UserProfile } from "../models/userProfile";
import { User } from "../models/userModel";

@Injectable({
  providedIn: "root"
})
export class AppStateService {
  usersProfileSummary: UserProfileSummary[];
  usersProfile: UserProfile[];
  onlineUsers: User[];
  selectedUser: User;
  loggedInUser: User;
  constructor() {}
}
