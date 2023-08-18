import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewuserinformationComponent } from './viewuserinformation/viewuserinformation.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './appPipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserlistComponent,
    ViewuserinformationComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
