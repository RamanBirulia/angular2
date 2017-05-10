import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../../../services/users.service';


@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html'
})
export class UsersAddComponent implements OnInit {

  entity = {
    accounts: [],
    is_admin: false
  };

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {}


  createUser(){
    this.userService.createUser(this.entity)
      .subscribe(
        ( data ) => {
          this.router.navigate(['users', 'edit', data.id])
        },
        ( error ) => { alert('error '+ error ) }
      )
  }
}
