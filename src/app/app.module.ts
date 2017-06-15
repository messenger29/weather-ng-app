import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent }    from './app.component';
import { CurrentWeather }	 from './current-weather.component';
import { ForecastService } from './forecast.service';
import { ForecastConfig }  from './forecast.constants';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeather
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [ForecastService,ForecastConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
