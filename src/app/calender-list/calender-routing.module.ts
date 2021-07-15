import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../@guard/auth.guard';
import { HomeComponent } from '../home/home.component';
import { CalenderListComponent } from './calender-list.component';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
      path: 'calender-list',
      component: CalenderListComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'calender',
      component: CalenderComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'calender/:id',
      component: CalenderComponent,
      canActivate: [AuthGuard],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CalendersRoutingModule {}
