import { PrimengModule } from './primeng.module';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { environment } from './../environments/environment';

import { TrackingModule } from './tracking/tracking.module'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { HttpClientModule } from '@angular/common/http';
import { AuthCenterModule } from '@iss/ng-auth-center';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,

    HttpClientModule,
    AuthCenterModule.forRoot(environment.auth),
    AppRoutingModule,

    PrimengModule,
    TrackingModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
