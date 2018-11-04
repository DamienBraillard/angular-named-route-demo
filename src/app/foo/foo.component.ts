import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NamedRoutesService } from 'ng-named-routes';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor(private router: Router, private namedRoutesService: NamedRoutesService) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate([this.namedRoutesService.getRoute('route.home')]);
  }
}
