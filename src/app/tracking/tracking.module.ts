import { AlertEmailComponent } from './components/alert-email/alert-email.component';
import { GetHistoryEffect } from './store/effects/get-history.effect';
import { HistoryComponent } from './components/history/history.component';
import { NameForStatusPipe } from './../shared/pipes/name-for-status.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GetListsEffect } from './store/effects/get-lists.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TrackingService } from './services/tracking.service';
import { PrimengModule } from '../primeng.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';

import { AuthCenterGuard } from '@iss/ng-auth-center';
import { trackingReducer } from './store/reducers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateDeliveryEffect } from './store/effects/update-delivery.effect';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent,
    canActivate: [AuthCenterGuard]
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule,

    PrimengModule,

    StoreModule.forFeature('tracking', trackingReducer),
    EffectsModule.forFeature(
      [
        GetListsEffect,
        GetHistoryEffect,
        UpdateDeliveryEffect
      ]
    ),
  ],
  declarations: [
    ListComponent,
    NameForStatusPipe,
    HistoryComponent,
    AlertEmailComponent
  ],
  providers: [
    TrackingService
  ]
})
export class TrackingModule { }
