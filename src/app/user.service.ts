import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user'
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {

private url='http://localhost:8080/api/v1/users';

  constructor(private http:HttpClient) { }
  
  getUsersList():Observable<User[]>{
  
  return this.http.get<User[]>(`${this.url}`);
  }
  
  createUser(user:User):Observable<Object>{
  return this.http.post(`${this.url}`,user);
  }
  
}
