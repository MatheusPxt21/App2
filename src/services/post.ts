import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import 'rxjs-compat/add/operator/map'
import { map } from "rxjs/operators";


@Injectable()
export class Post{
  server: string = 'http://localhost/apiionic/';

  constructor(private http: HttpClient){

  }

  
  dadosApi(dados: any, api: string){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'aplication/json'})
    }

    let url = this.server + api;
    return this.http.post(url, JSON.stringify(dados), httpOptions).pipe(map(res => res));

  }
}
