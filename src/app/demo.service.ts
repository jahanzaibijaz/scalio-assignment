import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DemoService {

  _url="https://api.github.com/search/";
  constructor(
    private httpClient: HttpClient) { }
    

    headers:any;

  
  /**
   * @name getGithubDummyData
   * @param value
   * @description returns github Dummy Data
  */
   getGithubDummyData(value:string){ 
     const URL = this._url+ `users?q=${value}%20in:login`;
     console.log(URL)
     return this.httpClient.get(URL,this.headers);
    //return this.httpClient.get(`${this._url}?${value}`)
  }
}
