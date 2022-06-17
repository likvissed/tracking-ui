import { ActionTypes } from './../action-types';
import { createAction, props } from '@ngrx/store';

export const getHistoryAction = createAction(
  ActionTypes.GET_HISTORY,
  props<{ id: number }>()
);

export const getHistorySuccessAction = createAction(
  ActionTypes.GET_HISTORY_SUCCESS,
  props<{ response: any }>()
);

export const getHistoryFailureAction = createAction(
  ActionTypes.GET_HISTORY_FAILURE,
  props<{ error: any }>()
);
