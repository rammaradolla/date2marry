export class PictureList {
  id: string;
  isActive: boolean;
  isOnRequest: boolean;
  isPublic: boolean;
  mediaType: string;
  url: string;
  userId: string;
}

export class VideoList {
  id: string;
  isActive: boolean;
  isOnRequest: boolean;
  isPublic: boolean;
  mediaType: string;
  url: string;
  userId: string;
}

export class UserAccount {
  businessType: string;
  credits: number;
  enabled: boolean;
  pictureList: PictureList[];
  videoList: VideoList[];
}

export class ChildList {
  age: number;
  dateOfBirth: Date;
  id: string;
  isFemale: boolean;
}

export class Country {
  id: string;
  name: string;
  shortName: string;
}

export class FirstLanguage {
  country: Country;
  id: string;
  name: string;
}

export class Country2 {
  id: string;
  name: string;
  shortName: string;
}

export class SecondLanguage {
  country: Country2;
  id: string;
  name: string;
}

export class UserProfile {
  aboutYourself: string;
  childList: ChildList[];
  drinkingType: string;
  education: string;
  eyeColor: string;
  firstLanguage: FirstLanguage;
  hairColor: string;
  height: number;
  hobbies: string;
  isSmoker: boolean;
  maritalStatus: string;
  profession: string;
  secondLanguage: SecondLanguage;
  userId: string;
  weight: number;
}

export class User {
  age: number;
  agentId: string;
  dateOfBirth: Date;
  email: string;
  female: boolean;
  firstName: string;
  id: string;
  lastName: string;
  middleName: string;
  mobileNumber: string;
  name: string;
  online: boolean;
  password: string;
  profilePicLargeUrl: string;
  profilePicSmallUrl: string;
  userAccount: UserAccount;
  userName: string;
  userProfile: UserProfile;
}
