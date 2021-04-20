import { Component, OnInit } from '@angular/core';
interface newUser {
  userName:string
  userLastName:string
  userEmail:string
  userPhoneNumber:number
}
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit { 
  public inputName:string = null;
  public inputLastName:string = null;
  public inputPhoneNumber:number = null;
  public inputEmail:string = null;
  public userList = [] ;
  public numberTimesClicked:number = 0
  public submitButtonAlert:string = null

  constructor() { }

  ngOnInit(): void {
  }
  addUser () {
    const newUser:newUser = {userName : `${this.inputName}` ,
    userLastName :  `${this.inputLastName}`,
    userEmail : `${this.inputEmail}`,
    userPhoneNumber: this.inputPhoneNumber
    }
    this.userList.push(newUser)
    this.inputName = '';
    this.inputLastName = '';
    this.inputPhoneNumber = null;
    this.inputEmail = '';
    console.log(this.userList)
    
  }
  buttonClicks(){
    this.numberTimesClicked++
  }
  clickButton() {
    if (this.numberTimesClicked < 1 ){
    this.addUser()} else {
      this.submitButtonAlert = 'Cant Press More Then Once';
      return this.submitButtonAlert
    }
  }
}
