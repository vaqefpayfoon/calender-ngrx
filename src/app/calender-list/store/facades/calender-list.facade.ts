import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calender } from '../../../@models/calender.model';
import { Store, select } from '@ngrx/store';
import { IState } from '../reducers';
import { getCalendersList } from '../selectors';
import { deleteCalender, editCalender, addCalender, getCalenders } from '../actions/calender-list.actions';

@Injectable({
  providedIn: 'root'
})
export class CalenderListFacade {
  public calender$: Observable<Calender[]> = this.store.pipe(select(getCalendersList));
  public calender: Calender;

  constructor(private store: Store<IState>) { }

  get(): void {
    this.store.dispatch(getCalenders());
  }

  add(calender: Calender): void {
    this.store.dispatch(addCalender({ calender }));
  }

  edit(calender: Calender, id): void {
    this.store.dispatch(editCalender({ calender, id }));
  }

  delete(id: number): void {
    this.store.dispatch(deleteCalender({ id }));
  }
}
