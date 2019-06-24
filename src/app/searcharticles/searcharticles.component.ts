/*this searcharticle component calls api to fetch news related to keywords typed by the user*/
import { Component, OnInit } from '@angular/core';
/*importing services*/
import { HeadlinesService } from './../services/headlines.service';

@Component({
  selector: 'app-searcharticles',
  templateUrl: './searcharticles.component.html',
  styleUrls: ['./searcharticles.component.css']
})
export class SearcharticlesComponent implements OnInit {
  public articleName: any;
  public article: any;
  private api_key = "21076591af0e48b6a67ac55eb1008079";

  constructor(public headlinesHttpService: HeadlinesService) {
    console.log('Search article component constructor is called');
  }

  ngOnInit() {
    console.log('Search article component onInit called');
  }

  getData = () => {
    console.log(this.articleName);
    return this.articleName
  }



  public getArticle: any = () => {

    let data = {
      name: this.articleName,
      key: this.api_key

    }
    console.log(data.key);
    console.log(data.name);
    /*subscribing to observables*/
    this.headlinesHttpService.getArticle(data).subscribe(
      data => {
        console.log(data);
        this.article = data['articles'];
        console.log(this.article)
      },
      /*handle error if not subscribed*/
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )

  }

}
