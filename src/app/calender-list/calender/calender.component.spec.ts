import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Ng2CompleterModule } from 'ng2-completer';
import { CalenderListFacade } from '../store/facades/calender-list.facade';

import { CalenderComponent } from './calender.component';

describe('CalenderComponent', () => {
  let component: CalenderComponent;
  let fixture: ComponentFixture<CalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        Ng2CompleterModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      declarations: [ CalenderComponent ],
      providers: [
        CalenderListFacade,
        FormBuilder
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('calender title accept only 50 character ', () => {
    component.reminderForm.patchValue({
      id: 3,
      title: 'complete my task',
      city: 'George Town',
      reminderDate: '2021-04-19',
      time: '11:14',
      marker: '#b6db22',
      userId: 3,
    })
    expect((component.reminderForm.controls['title'].value.length) <= 50).toBeTruthy();
  });

  it('city nut null', () => {
    component.reminderForm.patchValue({
      id: 3,
      title: 'complete my task',
      city: 'George Town',
      reminderDate: '2021-04-19',
      time: '11:14',
      marker: '#b6db22',
      userId: 3,
    })
    expect(component.reminderForm.controls['city'].value).not.toBeNull();
  });
});
