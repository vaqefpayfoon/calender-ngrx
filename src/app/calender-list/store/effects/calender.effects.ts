import { Injectable } from '@angular/core';
import { CalenderService } from '../../../@services/calender.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { getCalenders,
        addCalender,
        deleteCalender,
        editCalender,
        getCalendersSuccess,
        getCalendersFailed,
        addCalenderSuccess,
        addCalenderFailed,
        editCalenderSuccess,
        editCalenderFailed,
        deleteCalenderSuccess,
        deleteCalenderFailed
    } from '../actions/calender-list.actions';
import { switchMap, map, catchError, mergeMap, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CalenderEffects {
    constructor(private actions$: Actions,
                private calenderService: CalenderService) { }

    loadCalender$ = createEffect(() =>
        this.actions$.pipe(
                ofType(getCalenders),
                mergeMap(() =>
                    this.calenderService.get()
                        .pipe(
                            map(calenders => getCalendersSuccess({ calenders })),
                            catchError(error => [getCalendersFailed(error)]),
                        )
                )
            )
    );

    addCalender$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addCalender),
            switchMap(({ calender }) =>
                this.calenderService.add(calender).pipe(
                    map(calender => addCalenderSuccess({ calender })),
                    catchError(error => [addCalenderFailed(error)])
                )
            )
        )
    );

    editCalender$ = createEffect(() =>
       this.actions$.pipe(
           ofType(editCalender),
           switchMap(({ calender, id }) =>
           this.calenderService.edit(calender, id).pipe(
               map(calender => editCalenderSuccess({ calender, id })),
               catchError(error => [editCalenderFailed(error)])
           )
         )
       )
    );

    deleteCalender$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteCalender),
            switchMap(({ id }) =>
                this.calenderService.delete(id).pipe(
                    map(() => deleteCalenderSuccess({ id })),
                    catchError(error => [deleteCalenderFailed(error)])
                )
            )
        )
    );
}
