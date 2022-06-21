import { getListsAction, getListsSuccessAction, getListsFailureAction } from './../actions/get_lists.action';
import { TrackingService } from '../../services/tracking.service';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class GetListsEffect {
  constructor(
    private actions$: Actions,
    private trackingService: TrackingService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getListsAction),
      switchMap((value) => {
        return this.trackingService.getListTrackings(value.data).pipe(
          map((response: any) => {
            return getListsSuccessAction({response});
          }),

          catchError((errorResponse: HttpErrorResponse) => of(
            getListsFailureAction({error: errorResponse.error.message})
          ))
        )
      })
    )
  );
}
