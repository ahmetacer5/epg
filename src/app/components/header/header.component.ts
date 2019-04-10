import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() transparent = false;
  showBackButton = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('/program') > -1) {
          this.showBackButton = true;
        } else {
          this.showBackButton = false;
        }
      }
    });
  }

  ngOnInit() {
  }

}
