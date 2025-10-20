import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่

import { Dxc_Model_Userprofile_user } from '../../models/Dxc_Model_Userprofile_user';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  apiUrl: string;
  url: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Userlogin[0].url.production;
    this.url = environment.Dxc_Model_Count_ExpirDate[0].url.production;
  }
  findByUser() {
    return this.http.get(this.apiUrl);
  }

  getCountExpireDate(usermane: string) {
    return this.http.get(this.url + `${usermane}`);;
  }
}
