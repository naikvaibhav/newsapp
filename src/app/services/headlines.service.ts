import { Injectable } from '@angular/core';

//import http client to make the request
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class HeadlinesService {
  private api_key = "21076591af0e48b6a67ac55eb1008079"; //apikey from newsapi.org
  private baseUrl = "https://newsapi.org/v2/everything";//url to fetch articles based on the keywords typed by the user
  private baseUrl1 = "https://newsapi.org/v2/top-headlines?country=in";//url to fetch top headlines from india
  private baseUrl2 = "https://newsapi.org/v2/top-headlines?country=us";//url to fetch top international headlines
  private businessUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business";//url to fetch business news from india
  private entertainmentUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment";//url to fetch entertainment headlines from india
  private healthUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health";//url to fetch health news from india
  private sportsUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports";//url to fetch sports news from india
  private scienceUrl = "https://newsapi.org/v2/top-headlines?country=in&category=science";//url to fetch science news from india
  private technologyUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology";//url to fetch technology news from india

  private namedSourceUrl = "https://newsapi.org/v2/sources?language=en";//url to fetch popular news sources from across the world

  constructor(private _http: HttpClient) {
    console.log('Headlines service called')
  }
  private handleError(err: HttpErrorResponse) {
    console.log('Handle http error');
    console.log(err.message);
    return Observable.throw(err.message);

  }

  public getHeadlinesOfIndia(): any {
    let myResponse = this._http.get(this.baseUrl1 + '&apiKey=' + this.api_key);
    console.log(myResponse);
    return myResponse;
  }

  public getBusinessNewsOfIndia(): any {
    let myResponse = this._http.get(this.businessUrl + '&apiKey=' + this.api_key);
    console.log(myResponse);
    return myResponse;
  }

  public getEntertainmentNewsOfIndia(): any {
    let myResponse = this._http.get(this.entertainmentUrl + '&apiKey=' + this.api_key);
    console.log(myResponse);
    return myResponse;
  }

  public getHealthNewsOfIndia(): any {
    let myResponse = this._http.get(this.healthUrl + '&apiKey=' + this.api_key);
    console.log(myResponse);
    return myResponse;
  }

  public getSportsNewsOfIndia(): any {
    let myResponse = this._http.get(this.sportsUrl + '&apiKey=' + this.api_key);
    console.log(myResponse);
    return myResponse;
  }

  public getScienceNewsOfIndia(): any {
    let myResponse = this._http.get(this.scienceUrl + '&apiKey=' + this.api_key);
    console.log(myResponse);
    return myResponse;
  }

  public getTechnologyNewsOfIndia(): any {
    let myResponse = this._http.get(this.technologyUrl + '&apiKey=' + this.api_key);
    console.log(myResponse);
    return myResponse;
  }


  public getInternationalHeadlines(): any {
    let myResponse = this._http.get(this.baseUrl2 + '&apiKey=' + this.api_key);
    console.log(myResponse);
    return myResponse;
  }

  public getPopularNewsSource(): any {
    let myResponse = this._http.get(this.namedSourceUrl + '&apiKey=' + this.api_key);
    console.log(myResponse);
    return myResponse;
  }

  public getArticle(data): any {
    const params = new HttpParams()
      .set('q', data.name)
      .set('apiKey', data.key)



    let myResponse = this._http.get(this.baseUrl, { params });
    console.log(myResponse);
    return myResponse;
  }
}
