import { PrimengModule } from './../../../primeng.module';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './../../components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'not_found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not_found' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    PrimengModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
