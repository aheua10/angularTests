import { Component} from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-api-fetch-button',
  templateUrl: './api-fetch-button.component.html',
  styleUrls: ['./api-fetch-button.component.scss']
})

export class ApiFetchButtonComponent {
  public data = []
  public testData = []

  constructor(private apiService:ApiServiceService) {}

  ngOnInit(): void {}

  async getUserInfo() {
      return this.apiService.getData().then((response):any => {
      console.log('response >>>> ' , response)
      this.data.push(response)
      this.testData.push(response)
      return response
    })
  }
}