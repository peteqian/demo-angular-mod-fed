import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

export const FLIGHTS_ROUTES: Routes = [
  {
    path: '',
    component: FlightsComponent,
    children: [
      {
        path: 'flights-search',
        component: FlightsSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(FLIGHTS_ROUTES)],
  exports: [RouterModule]
})
export class FlightRoutingModule {}
