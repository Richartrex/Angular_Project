import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { MoviesfilmsDirective } from './moviesfilms.directive';


@NgModule({
  declarations: [
    AppComponent,   
    SignUpComponent,
    UserProfileComponent,    
    HighlightDirective, DisplayGuestsDirective, MoviesfilmsDirective    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
