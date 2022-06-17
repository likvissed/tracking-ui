import { HistoryComponent } from './../history/history.component';
import { Observable } from 'rxjs';
import { getListsAction } from './../../store/actions/get_lists.action';
import { allListsSelector, isSubmittingSelector } from './../../store/selectors';
import { Store, select } from '@ngrx/store';
import { Component, OnInit, Output, ViewChild, EventEmitter, ChangeDetectorRef, AfterViewInit } from '@angular/core';

import { AuthHelper } from '@iss/ng-auth-center';
import { Table } from 'primeng/table';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {
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
  isSubmitting$!: Observable<boolean>

  // params!: Map<any, any>;

  constructor(
    private authHelper: AuthHelper,
    private store: Store,
    public dialogService: DialogService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

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
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.store.dispatch(getListsAction( { data: this.getParams(1, 15)  }));
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

      this.store.dispatch(getListsAction( { data: this.getParams((event.first / 15) + 1, event.rows)  }));
    }
  }

  onShowHistory(id: number) {
    const ref = this.dialogService.open(HistoryComponent, {
      data: {
        id: id
      },
      header: 'История перемещений',
      width: '70%'
    });
  }

}
