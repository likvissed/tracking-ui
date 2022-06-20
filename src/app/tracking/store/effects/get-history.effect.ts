import { getHistoryAction, getHistorySuccessAction, getHistoryFailureAction } from './../actions/get-history.action';

import { TrackingService } from '../../services/tracking.service';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class GetHistoryEffect {
  constructor(
    private actions$: Actions,
    private trackingService: TrackingService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHistoryAction),
      switchMap(({id}) => {
        return this.trackingService.getHistoryTrackings(id).pipe(
          map((response: any) => {
            return getHistorySuccessAction({response});
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            getHistoryFailureAction({error: errorResponse.error.message})
          ))
        )
      })
    )
  );
}
