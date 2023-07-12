import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient : HttpClient) { }

  getData():Observable <User> {
   const header  = new HttpHeaders({
    "content-type":"application/json",
    "authenticationToken":"12345"
   })

   const params = new HttpParams()
   .set('pagesNumber',15)
    return this.httpClient.get<User>("http://localhost:3000/users",{headers:header,params:params})

  }

  storeData(body:any){

   return  this.httpClient.post('http://localhost:3000/users',body)
  }

  DeleteRow(id:number){

   return  this.httpClient.delete('http://localhost:3000/users/'+id)
  }

  GetDataById(id:any):Observable<User>{

   return  this.httpClient.get<User>('http://localhost:3000/users/'+id)
  }

  Update(id:any, value:any){
    return this.httpClient.put('http://localhost:3000/users/'+id,value)
  }


}

