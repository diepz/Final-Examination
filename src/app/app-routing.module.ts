import { CreateAwsomeComponent } from './create-awsome/create-awsome.component';
import { ListAwesomeComponent } from './list-awesome/list-awesome.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
