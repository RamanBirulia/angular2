import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './services/auth.service';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { RestorePassComponent } from './components/restore-pass/restore-pass.component';
import { Error404Component } from './components/error-404/error-404.component';
import { Error500Component } from './components/error-500/error-500.component';

import { AccountComponent } from './components/home/account/account.component';
import { UsersComponent } from './components/home/users/users.component';
import { LogHistoryComponent } from './components/home/log-history/log-history.component';
import { NotificationsComponent } from './components/home/notifications/notifications.component';
import { SettingsComponent } from './components/home/settings/settings.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { CategoryEditComponent } from './components/home/account/category-list/category-edit/category-edit.component';
import { UserListComponent } from './components/home/users/user-list/user-list.component';
import { UsersAddComponent } from './components/home/users/user-list/users-add/users-add.component';
import { UserEditComponent } from './components/home/users/user-list/user-edit/user-edit.component';
import { RolesComponent } from './components/home/users/roles/roles.component';
import { CategoryListComponent } from './components/home/account/category-list/category-list.component';
import { AccountOverviewComponent } from './components/home/account/account-overview/account-overview.component';
import { AccountAddComponent } from './components/home/account/account-add/account-add.component';
import { AccountPurchasesComponent } from './components/home/account/account-purchases/account-purchases.component';
import { AccountGeneralInfoComponent } from './components/home/account/account-overview/account-general-info/account-general-info.component';
import { AccountTimelineComponent } from './components/home/account/account-overview/account-timeline/account-timeline.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthService], children: [
      { path: 'account/:accId', component:  AccountComponent, children:[
        { path: '', component: AccountOverviewComponent, children:[
          {path: '', component: AccountGeneralInfoComponent},
          {path: 'timeline', component: AccountTimelineComponent}
          ]},
        { path: 'categories', component:  CategoryListComponent },
        { path: 'category/:categoryId', component:  CategoryEditComponent },
        { path: 'purchases', component:  AccountPurchasesComponent }
      ]},
      { path: 'accounts/new', component: AccountAddComponent},
      { path: 'users', component:  UsersComponent, children: [
        { path: '', component:  UserListComponent, children: [
          { path: 'add', component:  UsersAddComponent },
          { path: 'edit/:userId', component:  UserEditComponent }
        ] },
        { path: 'roles', component:  RolesComponent },
        { path: 'history', component:  LogHistoryComponent},
      ]},
      { path: 'notifications', component:  NotificationsComponent},
      { path: 'settings', component:  SettingsComponent},
      { path: 'profile', component:  ProfileComponent},
    ]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingupComponent },
  { path: 'restore-password', component: RestorePassComponent },
  { path: '404', component: Error404Component },
  { path: '500', component:  Error500Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
