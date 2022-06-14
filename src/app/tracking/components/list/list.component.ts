import { Component, OnInit } from '@angular/core';

import { AuthHelper } from '@iss/ng-auth-center';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private authHelper: AuthHelper
  ) { }

  ngOnInit() {
    console.log('JWT:', this.authHelper.getJwtPayload());
  }

}
