import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlightsModule } from './flights/flights.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FlightsModule, AppRoutingModule],
  declarations: [HomeComponent, AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
