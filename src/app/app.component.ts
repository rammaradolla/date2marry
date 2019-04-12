import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { LoaderService } from "./services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "date2marry";
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {}
}
