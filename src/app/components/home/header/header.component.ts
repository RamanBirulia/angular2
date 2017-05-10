import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CurrentUserService } from '../../../services/current-user.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    private currentUserService: CurrentUserService,
    private router: Router,
    private authService: AuthService) { }

  currentUser;

  ngOnInit() {
    this.currentUser = this.currentUserService.get();
  }

  logout(event){
    event.preventDefault();
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
}
