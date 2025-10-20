import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่

import { Dxc_Model_Userprofile_user } from '../../models/Dxc_Model_Userprofile_user';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiUrl: string;
  apiUrlPolicy: string;
  url: string;
  token: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Userprofile[0].url.production;
    this.apiUrlPolicy = environment.Dxc_Model_Policies[0].url.production;
    this.url = environment.Dxc_Model_MY_DATASET[0].url.production;
    this.token = environment.headerauthen;
  }
  findByGroupId(groupId: string) {
    return this.http.get(this.apiUrlPolicy + `${groupId}`);
  }
  findMyDataset() {
    if(environment.production) {
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Authorization': this.token
        }),
      };
      return this.http.get(this.url,httpOptions)
    } else {
      const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Authorization': this.token
        }),
      };
      return this.http.get(this.url,httpOptions)
    }
  }
  findByCID(username: string) {
    return this.http.get(this.apiUrl + `${username}`);
  }
  findByAcl() {
    return this.http.get('assets/data/DXC_GROUP_DATA_ACL.json');
  }
}

