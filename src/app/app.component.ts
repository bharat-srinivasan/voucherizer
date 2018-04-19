import { Component } from "@angular/core";
import { UserService } from "./service/user.service";

/**
 * Application"s root component
 */
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  /**
   * Points available for the user
   */
  availablePoints: Number;

  constructor(private userService: UserService) {
    this.availablePoints = userService.getUser().points;

    userService.getPoints().subscribe(points => {
      this.availablePoints = points;
    });
  }
}
