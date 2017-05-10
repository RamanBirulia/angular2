import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html'
})
export class SingupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  entity: object = {};

  register(){
    this.authService.register(this.entity)
  }


}
