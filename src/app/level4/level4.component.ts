import { Component } from '@angular/core';
import { BoardService } from './board.service';
import { BoardCell } from '../level3/level3.component';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.scss']
})
export class Level4Component {
  // // Demo
  // constructor(public board:BoardService){}
  // getColor(){
  //   return this.board.r > 100 ? 'red' : 'black';
  // }

  private playerNames: string[];

  constructor(public board:BoardService){
    this.playerNames = ['', 'X','O'];
  }
  
  public getPlayerName(col:number, row:number): string{
    return this.playerNames[this.board.boardContent[row][col]];
  }

  public getStyle(col:number, row:number): string{
    return `occupied-${this.getPlayerName(col,row)}`
  }

  public getWinnerName(): string{
    return this.playerNames[this.board.winnerIndex]
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
