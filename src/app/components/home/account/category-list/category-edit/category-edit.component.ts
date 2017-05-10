import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import * as _ from 'lodash';

import { CategoryService } from '../../../../../services/category.service'

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html'
})
export class CategoryEditComponent implements AfterContentChecked, OnInit {

  selectedCategoryId;
  categories;

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categories = this.categoryService.getAll();
    this.selectedCategoryId = _.get(this.categories, '[0].id');
  }

  ngAfterContentChecked(){
    this.route.params.subscribe((params: Params) => {
      this.selectedCategoryId = params['categoryId'];
      //todo select right data from categories service
    });
  }

}
