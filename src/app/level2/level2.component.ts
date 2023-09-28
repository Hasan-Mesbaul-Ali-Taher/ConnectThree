import { Component } from '@angular/core';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export default class Level2Component {
  private currentPlayerIx!: number;
  private currentWinnerIx!: number;
  private playerNames: string[];
  public boardContent!: number[][];

  constructor(){
    this.playerNames = ['', 'X','O'];
    this.onRestart();
  }

  public getPlayerName(col:number, row:number): string{
    return this.playerNames[this.boardContent[row][col]];
  }

  public getStyle(col:number, row:number): string{
    return `occupied-${this.getPlayerName(col,row)}`
  }

  public set(col:number, row:number): void{
    if(this.currentWinnerIx === 0 && this.boardContent[row][col] === 0){
      this.boardContent[row][col] = this.currentPlayerIx;
      this.currentPlayerIx = this.currentPlayerIx === 1 ? 2 : 1;
    }
  }

  public onRestart(){
    this.boardContent = [
      [0 ,0 ,0 ],
      [0 ,0 ,0 ],
      [0 ,0 ,0 ],
    ];
    this.currentPlayerIx = 1;
    this.currentWinnerIx = 0;

  }

  /**
   * Gets the player (1 or 2) who has won the game
   * @returns player (1 or 2) who has won, or 0 if there is no winner
   */
  private getWinnerIndex():number{
    return 0;
  }
}

