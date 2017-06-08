import { Component, OnInit } from '@angular/core';
import { ForecastService } from './forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  content = 'Loading...';

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
      .then((results) => this.content = JSON.stringify(results));
  }
}
