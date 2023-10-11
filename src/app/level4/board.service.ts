import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  x:number = 1;
  y:number = 1;
  r:number = 200;

  add(){
    this.r = this.x + this.y;
  }
  constructor() { }
}
