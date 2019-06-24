/*this technology component calls api to fetch headlines from india*/
import { Component, OnInit } from '@angular/core';
/*importing services*/
import { HeadlinesService } from './../../services/headlines.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  public headlines;

  constructor(public headlinesHttpService: HeadlinesService) {
    console.log('Technology component constructor is called');
  }

  ngOnInit() {
    console.log('Technology component onInit called');
    /*subscribing to observables*/
    this.headlinesHttpService.getTechnologyNewsOfIndia().subscribe(
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
