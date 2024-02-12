import { Component } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes: Hero[] = HEROES;
}
