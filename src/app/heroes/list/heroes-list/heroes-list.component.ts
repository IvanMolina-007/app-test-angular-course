import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent {
  heroNames = ['Spiderman', 'Hulk', 'Thor', 'Ironman', 'She Hulk'];
  deletedHero?: string;

  removeLastHero(): void {
    const deletedHero = this.heroNames.pop();
    this.deletedHero = deletedHero;
  }
}
