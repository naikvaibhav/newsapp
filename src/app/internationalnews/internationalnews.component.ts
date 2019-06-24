/*this international  component calls api to fetch headlines from india*/
import { Component, OnInit } from '@angular/core';
/*importing services*/
import { HeadlinesService } from './../services/headlines.service';

@Component({
  selector: 'app-internationalnews',
  templateUrl: './internationalnews.component.html',
  styleUrls: ['./internationalnews.component.css']
})
export class InternationalnewsComponent implements OnInit {
  public headlines;
  constructor(public headlinesHttpService: HeadlinesService) {
    console.log('International news component constructor is called');
  }

  ngOnInit() {
    console.log('International news component onInit called');
    /*subscribing to observables*/
    this.headlinesHttpService.getInternationalHeadlines().subscribe(
      data => {
        console.log('logging data');
        this.headlines = data["articles"];
        console.log(this.headlines);
      },
      /*handle error if not subscribed*/
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

}
