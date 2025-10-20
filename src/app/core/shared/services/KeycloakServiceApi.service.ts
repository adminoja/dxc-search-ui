import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KeycloakServiceApi {
  apiUrl: string;
  token: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Userlogin[0].url.production;
    this.token = environment.headerauthen;
  }

  GetUserProfile(): Observable<{ length: number; preferred_username: string }> {
    if(environment.production) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': this.token
        }),
      };
      return this.http.get<{ length: number; preferred_username: string }>(this.apiUrl,httpOptions);
    } else {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': this.token
        }),
      };
      return this.http.get<{ length: number; preferred_username: string }>(this.apiUrl,httpOptions);
    }
  }
}
