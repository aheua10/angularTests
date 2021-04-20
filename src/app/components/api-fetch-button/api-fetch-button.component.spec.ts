import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiFetchButtonComponent } from './api-fetch-button.component';
import { ApiServiceService } from '../api-service.service'
import { MockService, MockProvider } from '../../../../node_modules/ng-mocks';

describe('ApiFetchButtonComponent', () => {
  let component: ApiFetchButtonComponent;
  let fixture: ComponentFixture<ApiFetchButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFetchButtonComponent ],
      providers: [
        MockProvider(ApiServiceService, {
          getData: () => {
            return new Promise((resolve) => {
              resolve('SHAI BOT');
            })
          }
        })
      ]
    })
    .compileComponents();
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

  fit('Should get Test result' , async () => {
    await component.getUserInfo();
    fixture.detectChanges();
    expect(component.data).toEqual(['SHAI BOT']);
  });
});
