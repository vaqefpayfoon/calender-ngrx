import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { calendersFeatureName, calendersReducerMap } from './store/reducers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { CalenderComponent } from './calender/calender.component';
import { CalenderListComponent } from './calender-list.component';
import { CalenderItemComponent } from './calender-item/calender-item.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CalenderEffects } from './store/effects/calender.effects';
import { CalenderListFacade } from './store/facades/calender-list.facade';
import { CalenderService } from '../@services/calender.service';
import { CalendersRoutingModule } from './calender-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    CalenderComponent,
    CalenderListComponent,
    CalenderItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendersRoutingModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    Ng2CompleterModule,
    HttpClientModule,
    StoreModule.forFeature(calendersFeatureName, calendersReducerMap),
    EffectsModule.forFeature([CalenderEffects])
  ],
  providers: [CalenderListFacade]
})
export class CalenderModule { }
