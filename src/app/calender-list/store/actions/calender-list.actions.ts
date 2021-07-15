import { createAction, props } from '@ngrx/store';
import { Calender } from '../../../@models/calender.model';

export const getCalenders = createAction('[Calenders list] Get calenders');
export const getCalendersSuccess = createAction('[Calenders list] Get calenders success', props<{ calenders: Calender[] }>());
export const getCalendersFailed = createAction('[Calenders list] Get calenders failed', (error: Error) => ({ error }));

export const addCalender = createAction('[Calenders list] Add calender', props<{ calender: Calender }>())
export const addCalenderSuccess = createAction('[Calenders list] Add calenders success', props<{ calender: Calender }>())
export const addCalenderFailed = createAction('[Calenders list] Add calenders failed', (error: Error) => ({ error }));

export const editCalender = createAction('[Calenders list] Edit calender', props<{ calender: Calender, id }>())
export const editCalenderSuccess = createAction('[Calenders list] Edit calender success', props<{ calender: Calender, id }>())
export const editCalenderFailed = createAction('[Calenders list] Edit calender failed', (error: Error) => ({ error }));

export const deleteCalender = createAction('[Calenders list] Delete calender', props<{ id: number }>())
export const deleteCalenderSuccess = createAction('[Calenders list] Delete calender success', props<{ id: number }>())
export const deleteCalenderFailed = createAction('[Calenders list] Delete calender failed', (error: Error) => ({ error }));