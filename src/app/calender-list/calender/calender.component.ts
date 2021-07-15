import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CalenderService } from 'src/app/@services/calender.service';
import { Calender } from '../../@models/calender.model';
import { User } from '../../@models/user.model';
import { Cities } from '../../Data/cities';
import { CalenderListFacade } from '../store/facades/calender-list.facade';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  color = '';
  mytime: Date = new Date();
  cities = Cities;
  reminderForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    city: ['', Validators.required],
    reminderDate: [],
    time: [],
    marker: [''],
  });
  id: number;
  editmode = false;
  calender: Calender;
  weather: any;
  public calenders$: Observable<Calender[]> = this.calenderListFacade.calender$;
  constructor(
    private fb: FormBuilder,
    private calenderListFacade: CalenderListFacade,
    private service: CalenderService,
    private route: ActivatedRoute,
    private router: Router,
    http: HttpClient
  ) { 
    http.get('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7d00d3597b1f79f05e3411c0519d8a7f').subscribe(res => {
        this.weather = res;
    });
  }

  ngOnInit(): void {
    if (
      this.route.params.subscribe((param: Params) => {
        if(param.id) {
          this.id = +param.id;
          this.editmode = param.id != null;
        }
      })
    ) {
      this.intitializeForm();
    }
  }

  intitializeForm(): void {
    if (this.editmode) {
      this.service.get().subscribe(res => {
        this.calender = res.filter(f => f.id === this.id)[0];
        this.reminderForm.patchValue(this.calender);
      });
    }
  }
  submit(): void {
    const data: Calender = this.reminderForm.value;
    if (!this.editmode) {
      this.calenderListFacade.add(data);
    } else {
      this.calenderListFacade.edit(data, this.id)
    }
  }
}
