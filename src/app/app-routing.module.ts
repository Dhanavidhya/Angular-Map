import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: NewUserComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgot-password', component: ForgotComponent },

  {
    path: 'places',
    loadChildren: () =>
      import('./places/places.module').then((m) => m.PlacesModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'weatherapi',
    loadChildren: () =>
      import('./weatherapi/weatherapi.module').then((m) => m.WeatherapiModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
