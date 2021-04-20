import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public data = []

  constructor() { }
  public getData():any {
   return axios.get("https://reqres.in/api/users/2").then(response => 
       {
           const dataFetched = JSON.stringify(response.data.data)
           console.log('data fetched >', dataFetched)
           this.data.push(dataFetched)
           console.log( 'data apiService>>' , this.data)
           return this.data
       })
  }
}
