import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { usersMock } from '../shared/data/userMock';
import { Cliente } from '../shared/interfaces/user.interface';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {
  
  users: Cliente[] = [];

  constructor(private userService: UserService ){
  }

  ngOnInit(): void {
    this.userService.getAllUsers$().subscribe( users =>{
      this.users = users
    })
  }

  deleteUser(userRow: Cliente){
    this.userService.deleteUser$(userRow);
  }

  updateUser(user: Cliente){
    this.userService.setuserToEdit$(user);
  }

}
