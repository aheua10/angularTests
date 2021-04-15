import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public csPlayers:string[] = ['popik' , 'yossi' , 'yagel' , 'helfgod' ]
  public newCsPlayers:string[] = [''] 
  public createdBots:string[] = ['']
  public botName:string = 'Bot'
  public botNumber:number = 0
  public newCsPlayer:string = ''

  constructor() { }

  ngOnInit(): void {
  }
  addBot() {
  const addNumber = () => {
    this.botNumber ++
  };
  addNumber()
  this.createdBots.push(`${this.botName} ${this.botNumber}`)
  }
  removeBot() {
  this.createdBots.pop()
  this.botNumber--
  }
addNewPlayer () {
  this.newCsPlayers.push(this.newCsPlayer)
  this.newCsPlayer=''
}
removePlayer () {
  this.newCsPlayers.pop()
}
}

