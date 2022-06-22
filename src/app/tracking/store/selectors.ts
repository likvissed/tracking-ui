import { TrackingStateInterface } from './../types/tracking-state.interface';

import { createFeatureSelector, createSelector } from "@ngrx/store";

export const trackingFeatureSelector = createFeatureSelector<
 TrackingStateInterface
>('tracking')

export const allListsSelector = createSelector(
  trackingFeatureSelector,
  (trackingState: TrackingStateInterface) => {

    // console.log('selector', trackingState);
    return trackingState.lists;
  }
)

export const isSubmittingSelector = createSelector(
  trackingFeatureSelector,
  (trackingState: TrackingStateInterface) => trackingState.isSubmitting
)


export const idHistorySelector = createSelector(
  trackingFeatureSelector,
  (trackingState: TrackingStateInterface) => trackingState.histories
)
