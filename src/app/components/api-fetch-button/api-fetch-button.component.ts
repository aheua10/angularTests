import { Component} from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-api-fetch-button',
  templateUrl: './api-fetch-button.component.html',
  styleUrls: ['./api-fetch-button.component.scss']
})

export class ApiFetchButtonComponent {
  public data = []
  constructor(private apiService:ApiServiceService) {}

  public async getUserInfo(): Promise<void> {
    this.data.push(await this.apiService.getData());
  }
}