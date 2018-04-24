import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DriverModule } from './driver/driver.module';
import { RaceModule } from './race/race.module';
import { TeamModule } from './team/team.module';
import { DriverService } from './driver/driver.service';
import { HttpClient } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    DriverModule,
    RaceModule,
    TeamModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
    
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
