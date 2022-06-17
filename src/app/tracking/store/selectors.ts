
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const listFeatureSelector = createFeatureSelector<
  any
>('list')

export const allListsSelector = createSelector(
  listFeatureSelector,
  (userState: any) => {

    // console.log('selector', userState);
    return userState.lists;
  }
)

export const isSubmittingSelector = createSelector(
  listFeatureSelector,
  (userState: any) => userState.isSubmitting
)


export const idHistorySelector = createSelector(
  listFeatureSelector,
  (userState: any) => userState.histories
)
