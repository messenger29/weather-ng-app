import { Component, OnInit } from '@angular/core';
import { ForecastService } from './forecast.service';

@Component({
	selector: 'current-weather',
	templateUrl: './current-weather.component.html'
})

export class CurrentWeather implements OnInit{
	forecastData: object;

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
      .then((results) => this.forecastData = results);
  }

  private parseForecast(): void{}
}