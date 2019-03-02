import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { TestComponent } from './test/test.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlideshowModule } from 'ng-simple-slideshow';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LogoComponent } from './components/logo/logo.component';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { GoogleSigninComponent } from './components/google-signin/google-signin.component';
import { SigninComponent } from './components/signin/signin.component';
import { UsersListComponent } from './components/users-list/users-list.component';


// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1009303169908-1ed1ldutofgkou9avkg4nbnro4i8metd.apps.googleusercontent.com")
        }
      ]);
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    PhotoCardComponent,
    TestComponent,
    MenubarComponent,
    CreateAccountComponent,
    LogoComponent,
    GoogleSigninComponent,
    SigninComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlideshowModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
