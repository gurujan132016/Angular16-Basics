import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UxPipe } from './appPipes/ux.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './appPipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UxPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
