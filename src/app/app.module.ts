import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthCenterModule } from '@iss/ng-auth-center';
import { AppRoutingModule } from './app-routing.module';

import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
// import { PrimengModule } from './primeng.module';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { environment } from './../environments/environment';

import { TrackingModule } from './tracking/tracking.module'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    HttpClientModule,
    AuthCenterModule.forRoot(environment.auth),
    AppRoutingModule,

    BrowserModule,
    FormsModule,

    // PrimengModule,
    ButtonModule, MenubarModule, MenuModule, TableModule,
    TrackingModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
