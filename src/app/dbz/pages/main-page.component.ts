import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }
  constructor(private dbzService: DbzService) {}

  deleteCharacter(id: string) {
    this.dbzService.deleteCharacter(id);
  }

  addCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }
}
