import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() characterList: Character[] = [{ name: 'Trunks', power: 50 }];
  @Output() deleteCharacter = new EventEmitter<string>();

  onDeleteCharacter(id?: string): void {
    if (id) this.deleteCharacter.emit(id);
  }
}
