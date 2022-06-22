import { TrackingStateInterface } from './../types/tracking-state.interface';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const listFeatureSelector = createFeatureSelector<
 TrackingStateInterface
>('list')

export const allListsSelector = createSelector(
  listFeatureSelector,
  (trackingState: TrackingStateInterface) => {

    // console.log('selector', trackingState);
    return trackingState.lists;
  }
)

export const isSubmittingSelector = createSelector(
  listFeatureSelector,
  (trackingState: TrackingStateInterface) => trackingState.isSubmitting
)


export const idHistorySelector = createSelector(
  listFeatureSelector,
  (trackingState: TrackingStateInterface) => trackingState.histories
)
