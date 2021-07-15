import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { merge } from 'rxjs/operators';
import { Calender } from '../@models/calender.model';

@Injectable({providedIn: 'root'})
export class CalenderService {
  constructor(private http: HttpClient) {}

  get(): Observable<Calender[]> {
    return this.http.get<Calender[]>(
      'http://test.drjshaghaghi.com/api/calender'
    );
  }

  add(calender: Calender): Observable<Calender> {
    return this.http.post<Calender>('http://test.drjshaghaghi.com/api/calender', calender);
  }

  edit(calender: Calender, id): Observable<Calender> {
    return this.http.put<Calender>('http://test.drjshaghaghi.com/api/calender/' + id, calender);
  }

  delete(id: number) {
    return this.http.delete<Calender>('http://test.drjshaghaghi.com/api/calender/' + id);
  }
}

function WithoutTime(dateTime) {
  let strMonth = '';
  let strDay = '';
  let date = new Date(dateTime.getTime());
  if (date.getMonth() < 10) {
    strMonth = '0' + date.getMonth();
  }
  if (date.getDay() < 10) {
    strDay = '0' + date.getMonth();
  }

  const strDate = date.getFullYear() + '-' + strMonth + '-' + strDay;
  return strDate;
}
