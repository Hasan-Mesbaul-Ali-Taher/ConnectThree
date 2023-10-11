import { Component } from '@angular/core';
import { BoardService } from './board.service';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.scss']
})
export class Level4Component {
    constructor(public board:BoardService){

    }

    getColor(){
      return this.board.r > 100 ? 'red' : 'black';
    }
    
}
