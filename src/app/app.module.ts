import { NotFoundModule } from './shared/modules/not-found/not-found.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthCenterModule } from '@iss/ng-auth-center';
import { AppRoutingModule } from './app-routing.module';

import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    HttpClientModule,
    AppRoutingModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),

    AuthCenterModule.forRoot(environment.auth),

    PrimengModule,
    TrackingModule,
    NotFoundModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    DialogService,
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
