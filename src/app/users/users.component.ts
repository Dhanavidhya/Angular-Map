import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title = 'AngMap';

  inputSD : boolean = false;
  latitude = 51.678418;
  longitude = 7.809007;
  answer = 0;
  source:string = '';
  dest:string= '';

  clickme() {
    this.inputSD = true;
    // console.log('it does nothing',this.source);
  }
}