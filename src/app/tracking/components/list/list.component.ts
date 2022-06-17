import { Observable } from 'rxjs';
import { getListsAction } from './../../store/actions/get_lists.action';
import { allListsSelector } from './../../store/selectors';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

import { AuthHelper } from '@iss/ng-auth-center';
import { Table } from 'primeng/table';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Output() tableChanged = new EventEmitter<LazyLoadEvent>();
  @ViewChild('dt') table!: Table;
  totalRecords!: number;

  lists = [];

  selected: { [char: string]: string | string[] } = {};

  filters = {
    types: [],
    statuses: []
  }
  user_is_admin!: boolean;

  // params!: Map<any, any>;

  constructor(
    private authHelper: AuthHelper,
    private store: Store
  ) { }

  ngOnInit() {
    this.authHelper.isAuthenticated$.subscribe(isAuth => {
      if (isAuth) {
        this.user_is_admin = this.authHelper.getJwtPayload()['admin'];
      }
    });

    this.initializeValues();
  }

  getParams(page: number, size: number) {
    return {
      page: page,
      size: size,
      filters: JSON.stringify(this.selected)
    };
  }

  initializeValues() {
    this.store.dispatch(getListsAction( { data: this.getParams(1, 10)  }));
    this.loadLists();
  }

  loadLists() {
    this.store.pipe(select(allListsSelector))
      .subscribe((response: any) => {

        if (response) {
          this.lists = response.lists;

          this.filters.statuses = response.data_filters.statuses;
          this.filters.types = response.data_filters.types;

          this.totalRecords = response.total_items;
        }
      });
  }

  loadData(event: any) {
    if (JSON.stringify(event.filters) === JSON.stringify({})) {
      for (var member in this.selected) delete this.selected[member];
    }

    if (event && event.filters) {
      Object.keys(event.filters).forEach(property => {
        this.selected[property] = event.filters[property].value;
      });

      this.store.dispatch(getListsAction( { data: this.getParams((event.first / 10) + 1, event.rows)  }));
    }
  }

}
