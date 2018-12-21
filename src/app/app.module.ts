import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAwesomeComponent } from './list-awesome/list-awesome.component';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { CreateAwsomeComponent } from './create-awsome/create-awsome.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAwesomeComponent,
    CreateAwsomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
