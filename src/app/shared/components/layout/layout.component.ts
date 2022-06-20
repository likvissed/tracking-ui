import { AuthHelper } from '@iss/ng-auth-center';

import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private authHelper: AuthHelper
  ) { }

  isAuthenticated: boolean = false;
  fio_initials!: string
  user_is_admin!: boolean;
  items!: MenuItem[];

  ngOnInit() {
    console.log('JWT:', this.authHelper.getJwtPayload());

    this.items = [
      {
        label: "Треки",
        icon: "pi pi-fw pi-search"
      },
    ];

    this.authHelper.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;

      if (isAuth) {
        this.fio_initials = this.authHelper.getJwtPayload()['fio_initials'];
      }
    });
  }

  logout() {
    this.authHelper.logout();
  }

}
