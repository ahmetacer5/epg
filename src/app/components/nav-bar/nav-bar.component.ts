import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  pages = [
    {
      route: 'home',
      iconClass: 'fas fa-home'
    },
    {
      route: 'stream',
      iconClass: 'fas fa-desktop'
    },
    {
      route: 'channels',
      iconClass: 'fas fa-th-list'
    },
    {
      route: 'history',
      iconClass: 'fas fa-home'
    },
    {
      route: 'about',
      iconClass: 'fas fa-book-reader'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
