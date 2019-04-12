import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ChatService } from "./chat.service";
import {
  ChatMessage,
  ChatObject,
  UserChatHistory,
  ChattedUser,
  ChatUser
} from "./chat.model";
import { AppStateService } from "../app/services/app-state.service";
import { User } from "../app/models/userModel";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  user: string;
  receiver: string;
  messageText: string;
  messageArray: ChatObject[] = [];
  userChatHistory: UserChatHistory;
  loggedInUser: User;
  activeChatUser: User;
  activeChatUserChatHistory: ChattedUser;
  onlineUsersBigObjs: User[] = [];
  onlineUsers = [];
  @ViewChild("messageInput") messageInputRef: ElementRef;
  constructor(
    private chatService: ChatService,
    public appStateService: AppStateService,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    this.chatService.onConnect().subscribe(data => {
      console.log("step1 user connected successfully");
      this.chatService.mapSocketWithUser(this.appStateService.loggedInUser);
    });

    this.chatService
      .getChatHistory(this.appStateService.loggedInUser.id)
      .subscribe((userChatHistory: UserChatHistory) => {
        this.userChatHistory = userChatHistory;
      });
    this.chatService
      .newMessageReceived()
      .subscribe((chatObject: ChatObject) => {
        // message receved from some user, checking he is current activeChatUser or diffenent, if different chnage activeChatUser to new one.
        if (this.activeChatUser) {
          if (this.activeChatUser.id !== chatObject.loggedInUser.id) {
            this.activeChatUser = chatObject.loggedInUser;
          }
        } else {
          this.activeChatUser = chatObject.loggedInUser;
        }
        chatObject.message.avatar = "left";
        chatObject.message.chatClass = "chat chat-left";
        this.activeChatUserChatHistory = this.userChatHistory.chattedUsersList.filter(
          chattedUser => chattedUser.id === this.activeChatUser.id
        )[0];
        if (!this.activeChatUserChatHistory) {
          this.activeChatUserChatHistory = new ChattedUser();
          this.activeChatUserChatHistory.id = this.activeChatUser.id;
          this.activeChatUserChatHistory.chatHistory = [];
          this.userChatHistory.chattedUsersList.push(
            this.activeChatUserChatHistory
          );
        }
        this.activeChatUserChatHistory.chatHistory.push(chatObject);
      });
  }

  setActive(event, user) {
    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.getElementsByClassName("list-group-item");
    //do something with selected elements
    [].forEach.call(allAnchors, function(item: HTMLElement) {
      item.setAttribute("class", "list-group-item no-border");
    });
    //set active class for selected item
    event.currentTarget.setAttribute(
      "class",
      "list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2"
    );

    if (this.userChatHistory.id) {
      this.activeChatUser = user;
      this.activeChatUserChatHistory = this.userChatHistory.chattedUsersList.filter(
        chattedUser => chattedUser.id === this.activeChatUser.id
      )[0];
      if (!this.activeChatUserChatHistory) {
        this.createChattedUserObj();
      }
    } else {
      this.createUserChatHistoryObj();
      this.createChattedUserObj();
    }
    this.sendMessage();
  }

  createUserChatHistoryObj() {
    this.userChatHistory = new UserChatHistory();
    this.userChatHistory.id = this.appStateService.loggedInUser.id;
    this.userChatHistory.chattedUsersList = [];
  }

  createChattedUserObj() {
    this.activeChatUserChatHistory = new ChattedUser();
    this.activeChatUserChatHistory.id = this.activeChatUser.id;
    this.activeChatUserChatHistory.chatHistory = [];
    this.userChatHistory.chattedUsersList.push(this.activeChatUserChatHistory);
  }
  sendMessage() {
    if (this.activeChatUser) {
      const chatObject = new ChatObject();
      chatObject.loggedInUser = this.appStateService.loggedInUser;
      chatObject.activeChatUser = this.activeChatUser;
      if (this.messageInputRef.nativeElement.value != "") {
        chatObject.message = new ChatMessage(
          "right",
          "chat",
          this.appStateService.loggedInUser.profilePicSmallUrl,
          "",
          [this.messageInputRef.nativeElement.value],
          "text"
        );
        this.chatService.sendMessage(chatObject);
        this.activeChatUserChatHistory.chatHistory.push(chatObject);
        this.messageInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.focus();
      }
    }
  }

  getParameterByName(name, url = "") {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return "";
    }
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}
