import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private rootUrl = "http://localhost:5000/api/";
  private version = "v1";
  private baseUrl = this.rootUrl + this.version;

  constructor(private http: HttpClient) {}

  get(path: any, cb: any) {
    const endpoint = `${this.baseUrl}/${path}`;
    this.http.get<any>(endpoint).subscribe((response) => {
      if (!response.success) {
        console.log("error");
      } else {
        cb(response);
      }
    });
  }
}

export interface ResponseObject {
  success: boolean;
  // errorCode: number;
  // message: string;
  // user: any;
  // token: string;
  data: any;
}
