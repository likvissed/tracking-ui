import { getListsAction, getListsSuccessAction, getListsFailureAction } from './../actions/get_lists.action';
import { ListService } from './../../services/list.service';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class GetListsEffect {
  constructor(
    private actions$: Actions,
    private listService: ListService
  ) {}

  get$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getListsAction),
      switchMap((value) => {
        console.log('EFFECT', value);
        return this.listService.getListTrackings(value.data).pipe(
          map((response: any) => {
            console.log('get lists Success:', response);
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
