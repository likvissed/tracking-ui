import { ActionTypes } from './../action-types';
import { createAction, props } from '@ngrx/store';

export const updateDeliveryAction = createAction(
  ActionTypes.UPDATE_SELECT_DELIVERY,
  props<{ data: any, params: any }>()
);

export const  updateDeliverySuccessAction = createAction(
  ActionTypes.UPDATE_SELECT_DELIVERY_SUCCESS,
  props<{ response: any }>()
);

export const  updateDeliveryFailureAction = createAction(
  ActionTypes.UPDATE_SELECT_DELIVERY_FAILURE,
  props<{ error: any }>()
);
