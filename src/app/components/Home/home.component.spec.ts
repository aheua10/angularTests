import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';



import { HomeComponent } from './home.component;

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
  fit('Should add another player to the list', () => {
    fixture = TestBed.createComponent(HomeComponent);
    const res = fixture.debugElement.nativeElement.querySelector('button');
    res.click();
    fixture.detectChanges();
    const addedBot = fixture.debugElement.queryAll(By.css('div'));
    expect(addedBot[4].nativeNode.innerText).toBe('Bot 1');
  });
});
