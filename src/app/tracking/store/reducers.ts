import { updateDeliveryAction, updateDeliveryFailureAction, updateDeliverySuccessAction } from './actions/update-delivery.action';
import { getListsAction, getListsSuccessAction, getListsFailureAction } from './actions/get_lists.action';
import { Action, createReducer, on } from "@ngrx/store"
import { getHistoryFailureAction, getHistorySuccessAction, getHistoryAction } from './actions/get-history.action';

const initialState: any = {
  isSubmitting: false,
  validationsErrors: null,
  response: null,
  lists: null,
  histories: null
}

const trackingReducer = createReducer(
  initialState,

  on(getListsAction, (state): any => ({
    ...state,
    isSubmitting: true,
    validationsErrors: null // Удалить ошибки перед новой отправкой на сервер
  })),
  on(getListsSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    // response: action.response,
    lists: action.response,
  })),
  on(getListsFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    validationsErrors: action.error
  })),

  on(getHistoryAction, (state): any => ({
    ...state,
    isSubmitting: true,
    validationsErrors: null
  })),
  on(getHistorySuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    histories: action.response,
  })),
  on(getHistoryFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    validationsErrors: action.error
  })),

  on(updateDeliveryAction, (state): any => ({
    ...state,
    isSubmitting: true,
    validationsErrors: null
  })),
  on(updateDeliverySuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
  })),
  on(updateDeliveryFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    validationsErrors: action.error
  }))
)

export function reducers(state: any, action: Action) {
  return trackingReducer(state, action);
}
