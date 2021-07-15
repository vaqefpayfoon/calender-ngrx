import { Calender } from '../../../@models/calender.model';
import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { getCalendersSuccess, getCalendersFailed, addCalenderSuccess, deleteCalenderSuccess, addCalenderFailed, deleteCalenderFailed, editCalenderSuccess, editCalenderFailed } from '../actions/calender-list.actions';

export interface ICalendersListState extends EntityState<Calender> {
    calenders: Calender[];
    isLoaded?: boolean;
    errorMessage?: string;
}

export const adapter: EntityAdapter<Calender> = createEntityAdapter<Calender>({
    selectId: (calender) => calender.id,
    sortComparer: false
});

const initialState: ICalendersListState = adapter.getInitialState({
    calenders: []
});

const reducer = createReducer(
    initialState,
    on(getCalendersSuccess, (state, { calenders }) => adapter.addMany(calenders, state)),
    on(addCalenderSuccess, (state, { calender }) => adapter.addOne(calender, state)),
    on(editCalenderSuccess, (state, { calender }) => adapter.updateOne({ id: calender.id, changes: calender }, state)),
    on(deleteCalenderSuccess, (state, { id }) => adapter.removeOne(id, state)),
    on(addCalenderFailed, (state, error) => ({
        ...state,
        calenders: [],
        errorMessage: error.error.message
    })),
    on(editCalenderFailed, (state, error) => ({
        ...state,
        errorMessage: error.error.message
    })),
    on(getCalendersFailed, (state, error) => ({
        ...state,
        calenders: [],
        isLoaded: false,
        errorMessage: error.error.message
    })),
    on(deleteCalenderFailed, (state, error) => ({
        ...state,
        calenders: [],
        errorMessage: error.error.message
    }))
)

export function calendersReducer(state: ICalendersListState | null, action: Action) {
    return reducer(state, action);
}