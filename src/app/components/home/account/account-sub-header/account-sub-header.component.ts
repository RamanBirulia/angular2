import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import { CategoryService } from '../../../../services/category.service'

@Component({
  selector: 'app-account-sub-header',
  templateUrl: './account-sub-header.component.html'
})
export class AccountSubHeaderComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  selectedSubmenu = 'overview';
  categories = this.categoryService.getAll();

  selectedAccount: number;

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.selectedAccount = params['accountId'];
    });
  }

  selectCategory(event, id){
    this.router.navigate(['/account', this.selectedAccount, 'category', id]);
    event.preventDefault();
  }
}
