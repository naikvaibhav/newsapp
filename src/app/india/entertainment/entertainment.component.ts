/*this entertaiment component calls api to fetch headlines from india*/


import { Component, OnInit } from '@angular/core';
/*importing services*/
import { HeadlinesService } from './../../services/headlines.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
  public headlines;

  constructor(public headlinesHttpService: HeadlinesService) {
    console.log('Entertainment component constructor is called');
  }

  ngOnInit() {
    console.log('Entertainment component onInit called');
    /*subscribing to observables*/
    this.headlinesHttpService.getEntertainmentNewsOfIndia().subscribe(
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
