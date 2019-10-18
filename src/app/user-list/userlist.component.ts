import { Component } from '@angular/core';
import {User} from "../Services/user.model";

@Component({
  selector: 'user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent { 
  
  
  constructor() {
  
    
  }

  public userData : Array<User> = [];

  public ngOnInit(){
      // call api to fetch;

      var data = {
        UserId: 123,
    FirstName: "test1",
    LastName: "test2",
    Email: "test@gmail.com",
    Address: "Adr"
      }

       this.userData.push(data);

  }


}