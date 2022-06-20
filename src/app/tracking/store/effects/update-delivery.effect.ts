import { getListsAction } from './../actions/get_lists.action';
import { updateDeliveryAction, updateDeliverySuccessAction, updateDeliveryFailureAction } from './../actions/update-delivery.action';
import { TrackingService } from '../../services/tracking.service';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Injectable()
export class UpdateDeliveryEffect {
  constructor(
    private actions$: Actions,
    private trackingService: TrackingService,
    private messageService: MessageService
  ) {}

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateDeliveryAction),
      switchMap(({ data, params }) => {

        return this.trackingService.sentDeliveryEmail(data).pipe(
          map((response: any) => {
            this.messageService.add({severity: 'success', summary: 'Успешно', detail: response.result });
            // this.ref.close();
          }),
          switchMap((response: any) => [
            updateDeliverySuccessAction({response}),
            getListsAction(params)
          ]),

          catchError((errorResponse: HttpErrorResponse) => of(
            updateDeliveryFailureAction({error: errorResponse.error.message})
          ))
        )
      })
    )
  );

}
