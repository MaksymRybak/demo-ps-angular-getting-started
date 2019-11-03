import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-expand bg-light">
      <a class="navbar-brand">{{pageTitle}}</a>
      <ul class="nav nav-pills">
        <li class="nav-link" [routerLink]="['./']">Home</li>
        <li class="nav-link" [routerLink]="['./products']">Product List</li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
