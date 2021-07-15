import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Calender } from '../@models/calender.model';
import { CalenderService } from '../@services/calender.service';
import { CalenderListFacade } from './store/facades/calender-list.facade';

@Component({
  selector: 'app-calender-list',
  templateUrl: './calender-list.component.html',
  styleUrls: ['./calender-list.component.scss']
})
export class CalenderListComponent implements OnInit {

  public calenders$: Observable<Calender[]> = this.calenderListFacade.calender$;
  calenders: Calender[] = [];

  constructor(private calenderListFacade: CalenderListFacade, private service: CalenderService) { }

  ngOnInit(): void {
    this.calenderListFacade.get();
    this.service.get().subscribe(res => {
      this.calenders = res;
    });
  }
  delete(id: number): void {
    this.calenderListFacade.delete(id);
  }
}
