import { Component } from '@angular/core';
import {User} from '../user'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
users:User[];

constructor(private userService:UserService) { }

ngOnInit(): void{

//this.users=[{
//"name":"prati",
//"email":"ppppp",
//"phone":"768629",
//"message":"hi"

//}]

this.getUsers();

}

private getUsers(){
  this.userService.getUsersList().subscribe(data=>{
  this.users=data;
  });
  }
  

}
