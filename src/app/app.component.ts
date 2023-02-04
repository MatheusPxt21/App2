import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Add User', url: '/usuarios', icon: 'person-add' },
    { title: 'About the Developer', url: '/about', icon: 'cube' },

  ];

  constructor() {}
}
