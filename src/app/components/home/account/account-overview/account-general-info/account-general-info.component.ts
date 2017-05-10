import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import * as _ from 'lodash';

import { CurrentUserService } from '../../../../../services/current-user.service';


@Component({
  selector: 'app-account-general-info',
  templateUrl: './account-general-info.component.html'
})
export class AccountGeneralInfoComponent implements OnInit {

  currentAccount = { name: ''};

  constructor(
    private currentUserService: CurrentUserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        let currentUser = this.currentUserService.get();
        this.currentAccount = _.find(currentUser.accounts, {id: + params['accId']});
      }
    );
  }

}
