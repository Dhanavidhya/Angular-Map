import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private httpClient: HttpClientModule) {
    // getPlaces(){
    //   let url = environment.PLACES_BASE_URL+environment.GET_ALL_PLACES
    //   this.httpClient.get(url);
    // }
    // deletePlaces(id){
    // }
    // editPlaces(id, placesObj){
    // }
    // searchPlaces(keyword){
    // }
  }
}
