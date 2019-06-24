/*this popularsource component calls api to fetch named sources from across the world*/
import { Component, OnInit } from '@angular/core';

import { HeadlinesService } from './../services/headlines.service';

@Component({
  selector: 'app-popularsources',
  templateUrl: './popularsources.component.html',
  styleUrls: ['./popularsources.component.css']
})
export class PopularsourcesComponent implements OnInit {
  public headlines;

  constructor(public headlinesHttpService: HeadlinesService) {
    console.log('Popular source component constructor is called');
  }

  ngOnInit() {
    console.log('Popular source component onInit called');
    /*subscribing to observables*/
    this.headlinesHttpService.getPopularNewsSource().subscribe(
      data => {
        console.log('logging data');
        this.headlines = data["sources"];
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
