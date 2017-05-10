import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../../services/users.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    let self = this;
    this.userService.getAll().subscribe(
      ( data ) => {
        this.users =  self.userService.users;
      },
      ( error ) => { alert('error: ' + error) }
    )
  }

  navigateTo(id:number){
    this.router.navigate(['/users/edit', id])
  }

  deleteUser(id: number, event) {
    event.stopPropagation();
    this.userService.deleteUser(id).subscribe();
    this.router.navigate(['/users/add'])
  }
}
