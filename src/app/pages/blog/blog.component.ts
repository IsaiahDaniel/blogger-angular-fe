import { HttpService } from "./../../services/http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  isLoading = true;
  blog: any;
  blogId: any;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.blogId = params.get("id");
    });
  }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog() {
    const path = `blogs/${this.blogId}`;
    this.httpService.get(path, (data: any) => {
      this.isLoading = false;
      console.log(data.data);
      if (data.success) {
        this.blog = data.data;
      }
    });
  }

  goBack() {
    this.location.back();
  }

}
