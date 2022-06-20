import { updateDeliveryAction } from './../../store/actions/update-delivery.action';
import { AuthHelper } from '@iss/ng-auth-center';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-alert-email',
  templateUrl: './alert-email.component.html',
  styleUrls: ['./alert-email.component.scss']
})
export class AlertEmailComponent implements OnInit {
  present_email: boolean = false;
  selected_delivery: string = '';

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private authHelper: AuthHelper,
    private store: Store
  ) { }

  ngOnInit() {
    if (this.authHelper.getJwtPayload()['email']) {
      this.present_email = true;
    }
  }

  onSave() {
    if (!this.selected_delivery) {
      return;
    }

    const request: any = {
      id: this.config.data?.id,
      selected: this.selected_delivery
    }

    this.store.dispatch(updateDeliveryAction({data: request, params: this.config.data?.params}))
    this.ref.close(this.selected_delivery);
  }

  onClose() {
    this.ref.close();
  }
}
