import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-sub-header',
  templateUrl: './users-sub-header.component.html'
})
export class UsersSubHeaderComponent implements OnInit {

  constructor() { }

  selectedSubitem = 'admins';

  ngOnInit() {
  }

}
