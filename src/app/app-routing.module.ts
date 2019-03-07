import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { TestComponent } from "./test/test.component";
import { CreateAccountComponent } from "./components/create-account/create-account.component";
import { SigninComponent } from "./components/signin/signin.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { OnlineUsersComponent } from "./components/online-users/online-users.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";

const routes: Routes = [
  { path: "", redirectTo: "/signin", pathMatch: "full" },
  { path: "home", component: LandingPageComponent },
  { path: "userDetails", component: UserDetailsComponent },
  { path: "createAccount", component: CreateAccountComponent },
  { path: "signin", component: SigninComponent },
  { path: "usersList", component: UsersListComponent },
  { path: "onlineUsers", component: OnlineUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
