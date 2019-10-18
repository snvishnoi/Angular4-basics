import { Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import { Http ,Response} from "@angular/http";
import {User} from "./user.model";
import { environment } from '../environments/environment'


@Injectable()
export class DataService{
    
    constructor(public http: Http) {
        

    }

    path = environment.apiUrl;

    public GetData(){
        return this.http.get("https://jsonplaceholder.typicode.com/todos/1").map((res:Response)=>
            res.json()
        );
    }

    // postUser(user) {
    //     var body = JSON.stringify(user);
    //     return this.http.post(this.path + "/user", body, {
    //       headers: this.headers
    //     });
    //   }
    
    //   editUser(id, user) {
    //     var body = JSON.stringify(user);
    //     return this.http.put(this.path + "/user/" + id, body, {
    //       headers: this.headers
    //     });
    //   }
    
    //   deleteUser(id) {
    //     return this.http.delete(this.path + "/user/" + id, {
    //       headers: this.headers
    //     });
    //   }


}