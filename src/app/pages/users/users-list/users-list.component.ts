import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
    }, (err: { status: any; }) => {
      console.log('ERRO AO EXECUTAR', err.status);
    })
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe((response: any) => {
      console.log('Usuario Excluido');
    }, (err: any) => {
      console.log(err)
    }, () => {
      this.getUsers();
    })
  }

}