import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  public csPlayers:string[] = ['popik' , 'yossi' , 'yagel' , 'helfgod' ]
  public newCsPlayers:string[] = [] 
  public createdBots:string[] = []
  public botName:string = 'Bot'
  public botNumber:number = 0
  public newCsPlayer:string 

  addBot() {
    const addNumber = () => {
    this.botNumber ++
    };
    addNumber() 
    this.createdBots.push(`${this.botName} ${this.botNumber}`)
  }

  removeBot() {
    this.createdBots.pop()
    if (this.botNumber > 0) {
      this.botNumber--;
    }
  }

  addNewPlayer () {
    this.newCsPlayers.push(this.newCsPlayer)
    this.newCsPlayer=null
  }

  removePlayer () {
    this.newCsPlayers.pop()
  }

  public async apiTester() {
    const getFakeCsPlayersPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(['BotShai', 'BotTobi', 'Ailuz']);
      },300)
    });
    const x = await getFakeCsPlayersPromise;
    console.log("x",x);
  }

}

