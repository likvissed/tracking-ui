
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const listFeatureSelector = createFeatureSelector<
  any
>('list')

export const allListsSelector = createSelector(
  listFeatureSelector,
  (userState: any) => userState.lists
)
