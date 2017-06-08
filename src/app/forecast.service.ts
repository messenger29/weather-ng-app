import { Injectable }    from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ForecastConfig } from './forecast.constants';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ForecastService {
  private headers: Headers;
  private api_base_url = 'http://api.openweathermap.org/data/2.5/weather';
  private api_url: string;

  constructor(private http: Http, private forecastConfig: ForecastConfig){
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    this.api_url = `${this.api_base_url}?appid=${forecastConfig.appid}`;
  }

  // getCurrentForecast(): Observable<any>{
  //   const query = 'San Francisco,us';
  //   const url = `${this.api_url}&q=${query}`;
  //   return this.http.get(url)
  //     .map(response => <string[]>response.json());
  // }

  // since we're get receiving an one-call object, using Promise
  getCurrentForecast(): Promise<any>{
    const query = 'San Francisco,us';
    const url = `${this.api_url}&q=${query}`;
    return this.http.get(url)
      .toPromise()
      .then(response => <string[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}