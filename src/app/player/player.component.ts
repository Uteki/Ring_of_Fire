import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  test: number = 0;

  constructor() {
    this.test = this.testos()
  }

  testos(): number {
    return Math.floor(Math.random() * 4) + 1;
  }
}
