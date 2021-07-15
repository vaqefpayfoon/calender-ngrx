import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CalenderListFacade } from './calender-list/store/facades/calender-list.facade';
import { CalenderService } from './@services/calender.service';
import { AppRoutingModule } from './app-routing.module';
import { CalenderModule } from './calender-list/calender.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    CalenderModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
  ],
  providers: [CalenderListFacade, CalenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
