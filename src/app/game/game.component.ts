import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";

import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    NgClass,
    NgIf,
    PlayerComponent,
    MatIcon,
    MatFabButton
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game | undefined;

  constructor() {
  }

  ngOnInit():void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
  }

  takeCard(): void {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game?.stack.pop() ?? '';
      this.pickCardAnimation = true;

      setTimeout(() => {
        this.game?.playedCard.push(this.currentCard);
        this.pickCardAnimation = false;
      },1000)
    }
  }
}
