import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherapiComponent } from './weatherapi.component';

const routes: Routes = [{ path: '', component: WeatherapiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherapiRoutingModule { }
