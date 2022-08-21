import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userData: any = {};
  loadingForm = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.userData);
  }
}
