import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import { Http ,Response} from "@angular/http";


@Injectable()
export class DataService{
    
    constructor(public http: Http) {
        

    }

    public GetData(){
        return this.http.get("https://jsonplaceholder.typicode.com/todos/1").map((res:Response)=>
            res.json()
        );
    }


}