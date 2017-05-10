import { Component } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import { AccountService } from '../../../services/account.service'

@Component({
  selector: 'app-accout',
  templateUrl: './account.component.html'
})
export class AccountComponent {

  date: DateModel;
  options: DatePickerOptions;

  constructor() {
    this.options = new DatePickerOptions();
  }
}
