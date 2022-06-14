import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';

import { AuthCenterGuard } from '@iss/ng-auth-center';

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
    RouterModule.forChild(routes)
  ],
  declarations: [
  ]
})
export class TrackingModule { }
