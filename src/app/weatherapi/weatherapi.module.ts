import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherapiRoutingModule } from './weatherapi-routing.module';
import { WeatherapiComponent } from './weatherapi.component';

@NgModule({
  declarations: [WeatherapiComponent],
  imports: [FormsModule, CommonModule, WeatherapiRoutingModule],
})
export class WeatherapiModule {}
