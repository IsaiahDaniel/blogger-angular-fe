import { Component, OnInit } from "@angular/core";
import { Blog } from "src/app/models/interfaces.model";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  blogs: Blog[] = [];
  isLoading = true;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.isLoading = true;
    const path = "blogs";
    this.httpService.get(path, (data: any) => {
      this.isLoading = false;
      if(data.success){
        this.blogs = data.data;
      }
    });
  }
}
