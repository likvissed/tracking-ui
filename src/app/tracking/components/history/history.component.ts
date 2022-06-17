import { idHistorySelector } from './../../store/selectors';
import { Store, select } from '@ngrx/store';
import { getHistoryAction } from './../../store/actions/get-history.action';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, AfterViewInit {
  histories = [];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private store: Store,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit() {
    setTimeout(()=>{
      this.loadHistory();
    });
  }

  loadHistory() {
    this.store.dispatch(getHistoryAction({id: this.config.data?.id}))

    this.store.pipe(select(idHistorySelector))
      .subscribe((response) => {
        if (response) {
          this.histories = response.stories;
        }
      });

  }

  selectProduct() {
    this.ref.close();
}

}
