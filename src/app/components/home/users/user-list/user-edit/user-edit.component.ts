import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { UserService } from '../../../../../services/users.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  user = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.userService.getUser(params['userId'])
        .subscribe(
          ( data )=> { this.user = data;},
          ( error ) => { alert('error ' + error) }
        );
    });
  }

  updateUser(){
    this.userService.updateUser(this.user)
      .subscribe(
        ( data ) => {},
        ( error ) => { alert('error ' + error); }
      )
  }

}
