export interface PictureList {
  id: string;
  isActive: boolean;
  isOnRequest: boolean;
  isPublic: boolean;
  mediaType: string;
  url: string;
  userId: string;
}

export interface VideoList {
  id: string;
  isActive: boolean;
  isOnRequest: boolean;
  isPublic: boolean;
  mediaType: string;
  url: string;
  userId: string;
}

export interface UserAccount {
  businessType: string;
  credits: number;
  enabled: boolean;
  pictureList: PictureList[];
  videoList: VideoList[];
}

export interface ChildList {
  age: number;
  dateOfBirth: Date;
  id: string;
  isFemale: boolean;
}

export interface Country {
  id: string;
  name: string;
  shortName: string;
}

export interface FirstLanguage {
  country: Country;
  id: string;
  name: string;
}

export interface Country2 {
  id: string;
  name: string;
  shortName: string;
}

export interface SecondLanguage {
  country: Country2;
  id: string;
  name: string;
}

export interface UserProfile {
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

export interface User {
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
