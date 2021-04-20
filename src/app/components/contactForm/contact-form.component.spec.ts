import { expressionType } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//   fit('Should Not store more then one object' , () => {
//     fixture = TestBed.createComponent(ContactFormComponent);
//     const submitButton = fixture.debugElement.nativeNode.querySelector('.submit-button-form')
//     fixture.componentInstance.inputName = 'SHAI';
//     fixture.componentInstance.inputLastName = 'ELIYAHU';
//     fixture.componentInstance.inputPhoneNumber = 0;
//     fixture.componentInstance.inputEmail = 'aheua10@gmail.com';
//     fixture.detectChanges();
//     submitButton.click()
//     fixture.componentInstance.inputName = 'SHAI';
//     fixture.componentInstance.inputLastName = 'ELIYAHU';
//     fixture.componentInstance.inputPhoneNumber = 0;
//     fixture.componentInstance.inputEmail = 'aheua10@gmail.com';
//     fixture.detectChanges();
//     submitButton.click();
//     fixture.detectChanges();
//     expect(fixture.componentInstance.submitButtonAlert).toBe('Cant Press More Then Once');
// })

});
