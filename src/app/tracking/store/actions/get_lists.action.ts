import { ActionTypes } from './../action-types';
import { createAction, props } from '@ngrx/store';


export const getListsAction = createAction(
  ActionTypes.GET_LISTS
  // props<{ lists: any }>()
);

export const getListsSuccessAction = createAction(
  ActionTypes.GET_LISTS_SUCCESS,
  props<{ response: any }>()
);

export const getListsFailureAction = createAction(
  ActionTypes.GET_LISTS_FAILURE,
  props<{ error: any }>()
);
