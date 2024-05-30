import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  private apiKey = 'a82292deefb631b0d474bc768e42becd';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}weather?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }

  getWeatherForecast(city: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}forecast?q=${city}&appid=${this.apiKey}&units=metric`
    );
  }
}
