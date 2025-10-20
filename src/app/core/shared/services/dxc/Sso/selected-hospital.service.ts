import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IManageService } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectedHospitalService implements IManageService{

  baseUrl: string
  token: string;
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Sso_Selected_Hospital[0].url.production;
    this.token = environment.headerauthen;
  }
  filters(filter: string, name: string, lname?: string[], data?: any, latsName?: string[], offSet?: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    if (name == 'fullSso' && filter != '') {
      let CarLicense = filter.split(' ')
      let ssoNum = CarLicense[0]
      let year = CarLicense[1]

      return this.http.get(`${this.baseUrl}?ssoNum=${ssoNum}&year=${year}&page=0&size=100&sort=id%20ASC`,httpOptions);
    } else {

      return this.http.get(`${this.baseUrl}?${filter}=${name}&page=0&size=20&sort=id%20ASC`,httpOptions);
    }
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
}
