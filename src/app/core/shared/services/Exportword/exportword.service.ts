import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExportwordService {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_ExportWord[0].url.production;
  }

  postJson(jsonResults:string) { //get file from service
    let json=JSON.parse(jsonResults);
    console.log(json);
    return this.http.post(this.apiUrl,
      {
        "filename": "test.docx",
        "template": "template.docx",
        "data":json
      }, {
        responseType: "blob",
    });
}


}
