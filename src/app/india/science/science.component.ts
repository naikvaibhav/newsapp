/*this home component calls api to fetch headlines from india*/
import { Component, OnInit } from '@angular/core';
/*importing services*/
import { HeadlinesService } from './../../services/headlines.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  public headlines;

  constructor(public headlinesHttpService: HeadlinesService) {
    console.log('Science component constructor is called');
  }

  ngOnInit() {
    console.log('Science component onInit called');
    /*subscribing to observables*/
    this.headlinesHttpService.getScienceNewsOfIndia().subscribe(
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
