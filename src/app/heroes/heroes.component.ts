import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  public heroes: string[] = [
    'Spiderman',
    'Hulk',
    'Thor',
    'Ironman',
    'Black Widow',
    'Hawkeye',
  ];
}
