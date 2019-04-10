import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { MoviesfilmsDirective } from './moviesfilms.directive';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,   
    SignUpComponent,
    UserProfileComponent,    
    HighlightDirective, 
    DisplayGuestsDirective, 
    MoviesfilmsDirective, 
    MenuComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
