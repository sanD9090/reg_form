import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegServiceService {

  constructor(private _http:HttpClient) {
   }


   register(data:any){
     return this._http.post<any>(' http://localhost:3000/posts/',data)
   }
   getprofile():Observable<any>{
     return this._http.get<any>( 'http://localhost:3000/posts/')
   }
   deleteStudent(id:number):Observable<any>{
    return this._http.delete('http://localhost:3000/posts/'+id);
    }
   
}
