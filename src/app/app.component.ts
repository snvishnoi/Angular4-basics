import { Component } from '@angular/core';
import {DataService} from './Services/dataService'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent { 

 
  constructor(public dataService: DataService) {
   
    
  }
  title:string = " hello from webpack "


  public ngOnInit(){

    var data = this.dataService.GetData().subscribe(result=>{
      console.log(result);
    });

  }

}