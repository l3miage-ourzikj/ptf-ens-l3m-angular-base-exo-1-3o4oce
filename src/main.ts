import 'zone.js/dist/zone';
import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Lieu } from './Lieu';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly log = signal<object>( {} );
  readonly index = signal<number>(0);
  readonly lieux = signal<readonly Lieu[]>([
    {temperature: 27, photoURL: "https://www.10wallpaper.com/wallpaper/1366x768/1712/Waterfall_river_flow_forest_moss_rocks_4K_HD_Photo_1366x768.jpg"},
    {temperature: -32, photoURL: "https://www.10wallpaper.com/wallpaper/1366x768/1712/Winter_misty_snow_mountains_sunrise_4K_HD_Photo_1366x768.jpg"},
    {temperature: 12, photoURL: "https://www.10wallpaper.com/wallpaper/1366x768/1712/Canada_colorful_niagara_falls_4K_HD_Photo_1366x768.jpg"},
    {temperature: 5, photoURL: "https://www.10wallpaper.com/wallpaper/1366x768/1712/Norway_lofoten_islands_mountains_4K_HD_Photo_1366x768.jpg"},
    {temperature: 34, photoURL: "https://www.10wallpaper.com/wallpaper/1366x768/1712/Dreamy_sailboat_ocean_sunset_4K_HD_Photo_1366x768.jpg"}
  ]);

  // à faire : définir un signal calculé lieuActuel qui renvoie, à partir des signaux index et lieux, le lieu d'indice index dans lieux.

  /**
   * Tire au sort un indice entre 0 et le nombre de lieux à voir.
   * Affecte cet indice au signal index.
   */
  voyagevoyage(): void {
  }

}

bootstrapApplication(AppComponent);
