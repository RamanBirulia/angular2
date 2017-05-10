import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from '../../services/auth.service'
import { CurrentUserService } from '../../services/current-user.service';

import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  currentUser;

  constructor(
    private authService: AuthService,
    private router: Router,
    private currentUserService: CurrentUserService) {
  }


  ngOnInit() {
    this.currentUserService.loadData().subscribe(
      ( data ) => {
        this.currentUserService.set(data);
        this.currentUser = this.currentUserService.get();
        this.router.navigateByUrl('/account/' + (_.get(this.currentUser, 'accounts[0].id') || 1));},
      ( error ) => { alert('error: ' + error) }
    );
  }

}
