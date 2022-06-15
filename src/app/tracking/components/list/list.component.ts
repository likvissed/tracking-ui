import { Observable } from 'rxjs';
import { getListsAction } from './../../store/actions/get_lists.action';
import { allListsSelector } from './../../store/selectors';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { AuthHelper } from '@iss/ng-auth-center';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  lists$!: Observable<null | any>
  books = [];

  constructor(
    private authHelper: AuthHelper,
    private store: Store
  ) { }

  ngOnInit() {
    console.log('JWT:', this.authHelper.getJwtPayload());
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getListsAction());
    this.loadLists();
  }

  loadLists() {
    this.store.pipe(select(allListsSelector))
      .subscribe((value: any) => {
        console.log('value: ', value);

        if (value) {
          this.books = value.lists;
        }
      });

    // this.lists$ = this.store.pipe(select(allListsSelector));
  }

}
