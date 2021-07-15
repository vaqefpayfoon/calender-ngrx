import { Injectable } from '@angular/core';
import { User } from '../@models/user.model';
import { Users } from '../data/users';
import { catchError, map, take, takeUntil, tap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser: User;

  constructor() {}

  login(model: any): Observable<User> {
    const fakeSource = from(Users);
    return fakeSource.pipe(
      tap((val) => {
        if (
          val.username === model.username &&
          val.password === model.password
        ) {
          this.currentUser = val;
          localStorage.setItem('user', JSON.stringify(this.currentUser));
        }
      })
    );
  }

  loggedIn(): boolean {
    const user = localStorage.getItem('user');
    return user !== null;
  }
}
