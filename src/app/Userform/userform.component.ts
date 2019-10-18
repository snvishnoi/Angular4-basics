import { Component } from '@angular/core';
import {NgForm, FormGroup,FormControl,Validators} from '@angular/forms';
import { NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserFormComponent { 


  constructor(public ngbDateParserFormatter:NgbDateParserFormatter) {

  }

  // public selectedUser = {
  //   UserId: 0,
  //   FirstName: "",
  //   LastName: "",
  //   Address: "",
  //   Email: ""
  // };


  public selectedUser = new FormGroup({
    UserId: new FormControl(''),
    FirstName: new FormControl('',[Validators.minLength(5)]),
    LastName: new FormControl(''),
    Address: new FormControl(''),
    Email: new FormControl(''),
  });

  
  onSubmit(form: NgForm) {

    this.ngbDateParserFormatter.format(form.value.dob);

       console.log(form.value);
  }

//   header:string = " This is the Home "

// public options  = [1, 2, 3];
// public optionSelected: any = 1;

// public onOptionsSelected(event:any){
//  console.log(event); //option value will be sent as event
//}

}