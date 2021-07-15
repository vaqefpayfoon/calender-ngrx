import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Calender } from 'src/app/@models/calender.model';
import { CalenderListFacade } from '../store/facades/calender-list.facade';

@Component({
  selector: 'app-calender-item',
  templateUrl: './calender-item.component.html',
  styleUrls: ['./calender-item.component.scss']
})
export class CalenderItemComponent implements OnInit {

  @Input() calenders: Calender[];

  constructor(public calenderListFacade: CalenderListFacade) { }
  
  ngOnInit(): void {
  }

  deleteItem(id: number): void {
    this.calenderListFacade.delete(id)
  }

}
