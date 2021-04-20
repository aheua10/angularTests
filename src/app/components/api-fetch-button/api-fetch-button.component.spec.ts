import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiFetchButtonComponent } from './api-fetch-button.component';
import { ApiServiceService } from '../api-service.service'

describe('ApiFetchButtonComponent', () => {
  let component: ApiFetchButtonComponent;
  let fixture: ComponentFixture<ApiFetchButtonComponent>;
  let service: ApiServiceService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFetchButtonComponent ]
    })
    .compileComponents();
    service = new ApiServiceService
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiFetchButtonComponent ]
    })
    fixture = TestBed.createComponent(ApiFetchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('Should get Test result' , ()=>{
    const reqButton = fixture.debugElement.nativeElement.querySelector('button');
    reqButton.click();
    spyOn(service, 'getData').and.returnValue('test');
    fixture.detectChanges()
    expect(component.testData).toBe('test')
    
    
    
  })
});
