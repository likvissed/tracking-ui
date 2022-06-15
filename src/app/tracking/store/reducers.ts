import { getListsAction, getListsSuccessAction, getListsFailureAction } from './actions/get_lists.action';
import { Action, createReducer, on } from "@ngrx/store"

const initialState: any = {
  validationsErrors: null,
  response: null,
  lists: null
}

const userReducer = createReducer(
  initialState,

  on(getListsAction, (state): any => ({
    ...state,
    validationsErrors: null // Удалить ошибки перед новой отправкой на сервер
  })),
  on(getListsSuccessAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    response: action.response,
    lists: action.response,
  })),
  on(getListsFailureAction, (state, action): any => ({
    ...state,
    isSubmitting: false,
    validationsErrors: action.error
  }))
)

export function reducers(state: any, action: Action) {
  return userReducer(state, action);
}
