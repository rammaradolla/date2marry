import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TestComponent } from './test/test.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

const routes: Routes = [
  { path:'',   redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingPageComponent },
  { path: 'details', component: TestComponent },
  { path: 'createAccount', component: CreateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
