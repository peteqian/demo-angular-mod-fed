import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FlightsComponent } from './flights.component';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
import { FlightRoutingModule } from './flight-routing.module';

@NgModule({
  imports: [CommonModule, AuthLibModule, SharedLibModule, HttpClientModule, FormsModule, FlightRoutingModule],
  declarations: [FlightsComponent, FlightsSearchComponent],
  providers: [],
  bootstrap: [FlightsComponent]
})
export class FlightsModule {}
