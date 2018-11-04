import { NamedRoutesService } from 'ng-named-routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouteTest';
  public getRoute: (...any) => string;


  constructor(private namedRoutesService: NamedRoutesService) {
    this.getRoute = namedRoutesService.getRoute.bind(namedRoutesService);
  }
}
