import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DatePickerModule } from 'ng2-datepicker';

import { AuthService } from './services/auth.service'
import { RestService } from './services/rest.service';
import { AccountService } from './services/account.service';
import { CurrentUserService } from './services/current-user.service';
import { UserService } from './services/users.service';
import { CategoryService } from './services/category.service';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/home/header/header.component';
import { AccountComponent } from './components/home/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SingupComponent } from './components/singup/singup.component';
import { RestorePassComponent } from './components/restore-pass/restore-pass.component';
import { CategoryListComponent } from './components/home/account/category-list/category-list.component';
import { Error404Component } from './components/error-404/error-404.component';
import { Error500Component } from './components/error-500/error-500.component';
import { PurchasesComponent } from './components/home/account/purchases/purchases.component';
import { ShopListComponent } from './components/home/account/shop-list/shop-list.component';
import { UsersComponent } from './components/home/users/users.component';
import { LogHistoryComponent } from './components/home/log-history/log-history.component';
import { NotificationsComponent } from './components/home/notifications/notifications.component';
import { SettingsComponent } from './components/home/settings/settings.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { AccountSubHeaderComponent } from './components/home/account/account-sub-header/account-sub-header.component';
import { CategoryEditComponent } from './components/home/account/category-list/category-edit/category-edit.component';
import { UsersSubHeaderComponent } from './components/home/users/users-sub-header/users-sub-header.component';
import { UsersAddComponent } from './components/home/users/user-list/users-add/users-add.component';
import { RolesComponent } from './components/home/users/roles/roles.component';
import { UserListComponent } from './components/home/users/user-list/user-list.component';
import { AccountOverviewComponent } from './components/home/account/account-overview/account-overview.component';
import { AccountPurchasesComponent } from './components/home/account/account-purchases/account-purchases.component';
import { AccountGeneralInfoComponent } from './components/home/account/account-overview/account-general-info/account-general-info.component';
import { AccountTimelineComponent } from './components/home/account/account-overview/account-timeline/account-timeline.component';
import { UserEditComponent } from './components/home/users/user-list/user-edit/user-edit.component';
import { AccountAddComponent } from './components/home/account/account-add/account-add.component';
import { MessagesComponent } from './components/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountComponent,
    LoginComponent,
    HomeComponent,
    SingupComponent,
    RestorePassComponent,
    CategoryListComponent,
    Error404Component,
    Error500Component,
    PurchasesComponent,
    ShopListComponent,
    UsersComponent,
    LogHistoryComponent,
    NotificationsComponent,
    SettingsComponent,
    ProfileComponent,
    AccountSubHeaderComponent,
    CategoryEditComponent,
    UsersSubHeaderComponent,
    UsersAddComponent,
    RolesComponent,
    UserListComponent,
    AccountOverviewComponent,
    AccountPurchasesComponent,
    AccountGeneralInfoComponent,
    AccountTimelineComponent,
    UserEditComponent,
    AccountAddComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    DatePickerModule
  ],
  providers: [
    AuthService,
    UserService,
    RestService,
    AccountService,
    CategoryService,
    CurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
