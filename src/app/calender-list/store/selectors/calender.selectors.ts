import { ICalendersListState } from '../reducers/calender.reducers';

export const calendersListSelect = (state: ICalendersListState) => state.calenders;
export const calendersListLoaded = (state: ICalendersListState) => state.isLoaded;
