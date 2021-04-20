import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';




describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return h1 as Shai', ()=> {
    const htmlElements = fixture.debugElement.queryAll(By.css('h1'));
    expect(htmlElements[0].nativeNode.innerText).toContain('Shai')
  })

  it('Should verify that all players are connected', ()=> {
    fixture = TestBed.createComponent(HomeComponent)
    fixture.detectChanges();
    const playercount = fixture.componentInstance.csPlayers
    expect(playercount.length).toEqual(4);
    const allPlayers = fixture.debugElement.queryAll(By.css('div'))
    expect(allPlayers.length).toEqual(5)
  })

  it("Should add 1 to the bot's number", ()=> {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    fixture.componentInstance.addBot()
    expect(fixture.componentInstance.botNumber).toBeGreaterThan(0);
    expect(fixture.componentInstance.createdBots.length).toBeGreaterThan(0);
  })
  it('Should add another bot to the list', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const addBotButton = fixture.debugElement.nativeElement.querySelector('.add-bot-button');
    addBotButton.click();
    fixture.detectChanges();
    const addedBot = fixture.debugElement.queryAll(By.css('div'));
    expect(addedBot[4].nativeNode.innerText).toBe('Bot 1');
  
  });
  it('Should Remove last bot from the list', ()=> {
    fixture = TestBed.createComponent(HomeComponent);
    const addBotButton = fixture.debugElement.nativeElement.querySelector('button');
    addBotButton.click()
    fixture.detectChanges();
    const removeBotButton = fixture.debugElement.childNodes[8];
    removeBotButton.nativeNode.click();
    fixture.detectChanges();
    expect (fixture.componentInstance.csPlayers.length).toBe(4)
  });

  it('Should remove last bot and update bot number', ()=>{
    fixture = TestBed.createComponent(HomeComponent);
    fixture.componentInstance.addBot()
    fixture.componentInstance.addBot()
    fixture.detectChanges()
    fixture.componentInstance.removeBot()
    fixture.detectChanges()
    const howManyBotsAreConnected = fixture.componentInstance.createdBots
    expect (howManyBotsAreConnected.length).toBe(1)
  });

  it('Should Remove new player and not remove other players' , () => {
    fixture=TestBed.createComponent(HomeComponent);
    fixture.componentInstance.newCsPlayers.push('Test');
    const removePlayerButton = fixture.debugElement.nativeNode.querySelector('.remove-player-button');
    removePlayerButton.click();
    fixture.detectChanges();
    expect (fixture.componentInstance.newCsPlayers.length).toBe(0);
  });

  it('Should I don;t knbow', async () => {
    await component.apiTester();
    fixture.detectChanges();
    debugger;
    console.log("bl blaLVGDSLFN");
    
    // HTML - CONTORLLER - GET 
    // HTML - CONTORLLER - MOCK
    // axios - library  

  });

  // fit('Sould add new player to the list' , ()=>{
  //   fixture=TestBed.createComponent(HomeComponent);
  //   const addPlayerInput =fixture.debugElement.nativeNode.querySelector('#inputNewCsPlayer')
  //   addPlayerInput.value = 'shai'
  //   fixture.detectChanges();
  //   const addPlayer = fixture.debugElement.nativeNode.querySelector('.add-player-button')
  //   addPlayer.click();
  //   fixture.detectChanges();
  //   console.log(fixture.componentInstance.newCsPlayers)
  //   debugger
  //   addPlayer.click();
  //   fixture.whenStable().then(() => {
  //     expect(fixture.componentInstance.newCsPlayers[0]).toBe('shai');
  //   });
  })
  
