import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UserFormComponent } from './Userform/userform.component';
import { UserListComponent } from '../app/user-list/userlist.component';
import {DataService} from './Services/dataService';
import { HttpModule } from '@angular/http';
import {AppRoutes} from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule,     
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent
  ],

  providers:[
    DataService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }