import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places.component';
import { ListPlacesComponent } from './list-places/list-places.component';
import { AddPlacesComponent } from './add-places/add-places.component';
import { EditPlacesComponent } from './edit-places/edit-places.component';
import { DeletePlacesComponent } from './delete-places/delete-places.component';
import { SearchPlacesComponent } from './search-places/search-places.component';


@NgModule({
  declarations: [
    PlacesComponent,
    ListPlacesComponent,
    AddPlacesComponent,
    EditPlacesComponent,
    DeletePlacesComponent,
    SearchPlacesComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule
  ]
})
export class PlacesModule { }
