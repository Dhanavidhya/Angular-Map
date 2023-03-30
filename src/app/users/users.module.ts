import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCbw1T0_T-ebwiPm0IIRPLidzhzLr1yt7k'
    })
  ]
})
export class UsersModule { }