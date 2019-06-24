/*this business component calls api to fetch business headlines from india*/
import { Component, OnInit } from '@angular/core';
/*importing services*/
import { HeadlinesService } from './../../services/headlines.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  public headlines;

  constructor(public headlinesHttpService: HeadlinesService) {
    console.log('Business component constructor is called');
  }

  ngOnInit() {
    console.log('Business component onInit called');
    /*subscribing to observables*/
    this.headlinesHttpService.getBusinessNewsOfIndia().subscribe(
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
