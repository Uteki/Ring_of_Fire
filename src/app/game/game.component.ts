import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";

import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    NgClass,
    NgIf
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation = false;
  game: Game | undefined;

  constructor() {
  }

  ngOnInit():void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    this.pickCardAnimation = true;
  }
}
