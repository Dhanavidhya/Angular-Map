import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-list-places',
  templateUrl: './list-places.component.html',
  styleUrls: ['./list-places.component.css'],
})
export class ListPlacesComponent {
  placeList: any;
  placeResult: any;

  constructor(private placesService: PlacesService) {}
  // getPlacesList() {
  //   this.placesService.getPlaces().subscribe((data: any[]) => {
  //     this.placeResult = data;
  //     this.placeList = this.placeResult.results;
  //     console.log(this.placeList);
  //   });
  // }
}
