import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnInit {
  city: string = 'New York';
  weather: any;

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.getWeather(this.city);
  }

  getWeather(city: string): void {
    this.weatherService.getCurrentWeather(city).subscribe(
      (data) => (this.weather = data),
      (error) => console.error(error)
    );
  }
}
