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
    console.log('html Element >>>' , htmlElements)
    expect(htmlElements[0].nativeNode.innerText).toContain('Shai')
  })

  it('Should verify that all players are connected', ()=> {
    fixture = TestBed.createComponent(HomeComponent)
    fixture.detectChanges();
    const playercount = fixture.componentInstance.csPlayers
    expect(playercount.length).toEqual(4);
    const allPlayers = fixture.debugElement.queryAll(By.css('div'))
    expect(allPlayers.length).toEqual(4)
  })

  it("Should add 1 to the bot's number", ()=> {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    fixture.componentInstance.addBot()
    expect(fixture.componentInstance.botNumber).toBeGreaterThan(0);
    expect(fixture.componentInstance.csPlayers.length).toBe(5);
  })
  it('Should add another player to the list', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const addBotButton = fixture.debugElement.nativeElement.querySelector('button');
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
  })
  fit('Should remove last bot and update bot number', ()=>{
    fixture = TestBed.createComponent(HomeComponent);
    fixture.componentInstance.addBot()
    fixture.componentInstance.addBot()
    fixture.detectChanges()
    fixture.componentInstance.removeBot()
    fixture.detectChanges()
    const newBotNumber = fixture.componentInstance.botNumber
    expect (newBotNumber).toBe(1)
    expect (fixture.componentInstance.csPlayers.length).toBe(5)
  })
});
