import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account.service';

import { CurrentUserService } from '../../../../services/current-user.service';
import { Router } from '@angular/router';

import * as _ from 'lodash';




@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html'
})
export class AccountAddComponent implements OnInit {

  entity = {};
  currentUser;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private currentUserService: CurrentUserService
  ) { }

  ngOnInit() {
    this.currentUser = this.currentUserService.get();
  }

  save(){
    this.accountService.create(this.entity)
      .subscribe(
        ( data ) => {
          alert('create successful!');
          this.currentUserService.addAccount(data);
          this.router.navigate(['/account', _.get(data, 'id', _.get(this.currentUser, 'accounts[0].id'))]);
          },
        ( error ) => { alert('error!' + error.toString())}
      )
  }

}
