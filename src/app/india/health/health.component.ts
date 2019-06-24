/*this health component calls api to fetch headlines from india*/
import { Component, OnInit } from '@angular/core';
/*importing services*/
import { HeadlinesService } from './../../services/headlines.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  public headlines;

  constructor(public headlinesHttpService: HeadlinesService) {
    console.log('Health component constructor is called');
  }

  ngOnInit() {
    console.log('Health component onInit called');
    /*subscribing to observables*/
    this.headlinesHttpService.getHealthNewsOfIndia().subscribe(
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
