import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlacesComponent } from './add-places/add-places.component';
import { DeletePlacesComponent } from './delete-places/delete-places.component';
import { EditPlacesComponent } from './edit-places/edit-places.component';
import { ListPlacesComponent } from './list-places/list-places.component';
import { PlacesComponent } from './places.component';
import { SearchPlacesComponent } from './search-places/search-places.component';

const routes: Routes = [
  { path: '', component: ListPlacesComponent },
  { path: 'add', component: AddPlacesComponent },
  { path: 'edit/:id', component: EditPlacesComponent },
  { path: 'delete/:id', component: DeletePlacesComponent },
  { path: 'search', component: SearchPlacesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
