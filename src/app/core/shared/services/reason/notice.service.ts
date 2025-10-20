import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDxcNotice } from 'src/app/core/components/reason/dxcui0006/dxc-notice/dxc-notice/dxc-notice.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  url: string = environment.Dxc_Model_Notice[0].url.production;
  constructor(private http: HttpClient) { }

  getUserAccountList(): Observable<IDxcNotice> {
    if(environment.production) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': environment.headerauthen
        }),
      };
      // return this.http.get<Icontent>(`dxc-admin-service/api/qm/v2/dxc/user-account-from-dep?page=0&size=10&&sortDirection=DESC&sortProperties=id`,httpOptions);
      return this.http.get<IDxcNotice>(this.url + `?status=true&orders=createDate%20DESC`, httpOptions);
    } else {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': environment.headerauthen
        }),
      };
      return this.http.get<IDxcNotice>(this.url + `?status=true&orders=createDate%20DESC`, httpOptions);
    }
  }
}
