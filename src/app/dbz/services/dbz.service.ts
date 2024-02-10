import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  characters: Character[] = [
    { id: uuid(), name: 'Krilin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 9000 },
    { id: uuid(), name: 'Trunks', power: 9000 },
    { id: uuid(), name: 'Gohan', power: 9000 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.characters.push(newCharacter);
  }

  deleteCharacter(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
