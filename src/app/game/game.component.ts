import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";

import { Game } from '../../models/game';
import { PlayerComponent } from "../player/player.component";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddPlayerComponent} from "../dialog-add-player/dialog-add-player.component";
import {GameInfoComponent} from "../game-info/game-info.component";

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
    MatFabButton,
    GameInfoComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game | undefined;

  constructor(public dialog: MatDialog) {}

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

      this.game!.currentPlayer++;
      this.game!.currentPlayer = this.game!.currentPlayer % this.game!.players.length;

      setTimeout(() => {
        this.game?.playedCard.push(this.currentCard);
        this.pickCardAnimation = false;
      },1000)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe( (name: string) => {
      if (name === undefined) { return }
      this.game?.players.push(name);
    })
  }
}
