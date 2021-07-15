import { ICalendersListState, calendersReducer } from './calender.reducers';
import { ActionReducerMap } from '@ngrx/store';

export const calendersFeatureName = 'calendersList';

export interface IState {
    readonly calendersList: ICalendersListState;
}

export const calendersReducerMap: ActionReducerMap<IState> = {
    calendersList: calendersReducer
}
