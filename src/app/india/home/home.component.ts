/*this home component calls api to fetch headlines from india*/
import { Component, OnInit } from "@angular/core";
/*importing services*/
import { HeadlinesService } from "./../../services/headlines.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public headlines;

  constructor(public headlinesHttpService: HeadlinesService) {
    console.log("Home component constructor is called");
  }

  ngOnInit() {
    console.log("Home component onInit called");
    /*subscribing to observables*/
    this.headlinesHttpService.getHeadlinesOfIndia().subscribe(
      (data) => {
        console.log("logging data");
        this.headlines = data["articles"];
        console.log(this.headlines);
      },
      /*handle error if not subscribed*/
      (error) => {
        console.log("some error occured");
        console.log(error);
      }
    );
  }
}
