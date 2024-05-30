import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss',
})
export class ForecastComponent implements OnInit {
  city: string = 'New York';
  forecast: any;

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.getForecast(this.city);
  }

  getForecast(city: string): void {
    this.weatherService.getWeatherForecast(city).subscribe(
      (data) => (this.forecast = data),
      (error) => console.error(error)
    );
  }
}
