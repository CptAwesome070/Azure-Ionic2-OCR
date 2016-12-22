import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
//import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import "rxjs";
//import Response = ts.server.protocol.Response;

/*
  Generated class for the BillService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BillService {

    public azureURL: string;
    public azureAPIKey: string;



  constructor(public http: Http) {
    //console.log('Hello BillService Provider');
  }

  postImage(imageData) {
      this.azureURL = "https://api.projectoxford.ai/vision/v1.0/ocr?language=unk&detectOrientation =true";
      this.azureAPIKey = "08a3c81748044e109318eb3932b8674a";
      //return new Promise(resolve => {

        let bodyString = JSON.stringify({}); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/octet-stream',
            "Ocp-Apim-Subscription-Key": this.azureAPIKey });
        let options       = new RequestOptions({ headers: headers }); // Create a request option
          //return this.http.post(this.azureURL, {imageData}, options).map(res => res.json());
      return this.http.post(this.azureURL,imageData, options)
          .map(res => res.json());

      //});
  }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

}
