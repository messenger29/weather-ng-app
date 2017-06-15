import { Component, OnInit } from '@angular/core';
import { ForecastService } from './forecast.service';

@Component({
	selector: 'current-weather',
	templateUrl: './current-weather.component.html'
})

export class CurrentWeather implements OnInit{
	currForecastData: object;

  constructor(private forecastService: ForecastService){}

  ngOnInit(){
    this.currentForecast();
  }

  // private currentForecast(): void{
  //   this.forecastService.getCurrentForecast()
  //     .subscribe((results) => this.content = JSON.stringify(results));
  // }

  private currentForecast(): void{
    this.forecastService.getCurrentForecast()
      // .then((results) => this.content = JSON.stringify(results));
      .then((results) => this.currForecastData = results);
  }

  private parseForecast(): void{}

  //TODO get and set location coordinates from currForecastData
  //TODO get and set weather condition values from currForecastData
  //TODO get and set main values (temps, pressure, humidity, etc) from currForecastData
  //TODO get and set more info (wind, rain, clouds, etc values) from currForecastData
  //TODO get and set sunrise/sunset from currForecastData
  //TODO get and set dt (last updated) value from currForecastData

  //FUNCTION to convert temps between kelvin, celsius, fahrenheit
  //FUNCTION to convert wind speeds between meter/sec and miles/hour
}