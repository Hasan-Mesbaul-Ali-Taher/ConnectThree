import { Component } from '@angular/core';
import { Level2Component } from '../level2/level2.component';

export interface BoardCell {
  playerName: string;
  class: string;
}

@Component({
  selector: 'app-connect-three',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss'],
})
export class Level3Component extends Level2Component {
  constructor() {
    super();
  }

  public getCells(): BoardCell[][] {
    const result: BoardCell[][] = [];
    for (let row = 0; row < 3; row++) {
      result.push([]);
      for (let col = 0; col < 3; col++) {
        result[row][col] = {
          playerName: this.getPlayerName(col, row),
          class: this.getStyle(col, row),
        };
      }
    }

    return result;
  }
}