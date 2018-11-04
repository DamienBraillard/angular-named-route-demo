import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { NamedRoutesService } from 'ng-named-routes';
import { AppComponent } from './app.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';
import { HomeComponent } from './home/home.component';


const appRoutes: any[] = [
  { path: 'home', component: HomeComponent, name: 'route.home' },
  { path: 'foo', component: FooComponent, name: 'route.foo' },
  { path: 'bar', component: BarComponent, name: 'route.bar' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    BarComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true}),
    BrowserModule
  ],
  providers: [
    NamedRoutesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router, namedRoutesServices: NamedRoutesService) {
    namedRoutesServices.setRoutes(router.config);
  }
 }
