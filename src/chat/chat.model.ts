import { User } from "../app/models/userModel";

// search form
export class ChatMessage {
  public avatar: string;
  public chatClass: string;
  public imagePath: string;
  public time: string;
  public messages: string[];
  public messageType: string;

  constructor(
    avatar: string,
    chatClass: string,
    imagePath: string,
    time: string,
    messages: string[],
    messageType: string
  ) {
    this.avatar = avatar;
    this.chatClass = chatClass;
    this.imagePath = imagePath;
    this.time = time;
    this.messages = messages;
    this.messageType = messageType;
  }
}

export class ChatUser {
  firstName: string;
  lastName: string;
  id: string;
}

export class ChatObject {
  loggedInUser: User;
  activeChatUser: User;
  message: ChatMessage;
}

export class ChattedUser {
  id: string;
  chatHistory: ChatObject[];
}

export class UserChatHistory {
  id: string;
  chattedUsersList: ChattedUser[];
}
