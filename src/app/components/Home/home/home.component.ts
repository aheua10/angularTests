import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public csPlayers:string[] = ['popik' , 'yossi' , 'yagel' , 'helfgod' ]
  public botName:string = 'Bot'
  public botNumber:number = 0


  constructor() { }

  ngOnInit(): void {
  }
addBot() {
  const addNumber = () => {
    this.botNumber ++
  };
  addNumber()
  this.csPlayers.push(`${this.botName} ${this.botNumber}`)
}
}
