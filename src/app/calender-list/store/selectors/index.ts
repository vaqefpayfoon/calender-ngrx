import { createFeatureSelector, createSelector } from "@ngrx/store";
import { calendersFeatureName } from '../reducers';
import { adapter, ICalendersListState } from '../reducers/calender.reducers';

const getCalendersModule = createFeatureSelector<ICalendersListState>(calendersFeatureName);

export const {
    selectEntities,
    selectAll,
    selectIds,
    selectTotal
} = adapter.getSelectors(getCalendersModule);

const selectAllCalenders = selectAll;

export const getCalendersList = createSelector(
    getCalendersModule,
    selectAllCalenders
);
