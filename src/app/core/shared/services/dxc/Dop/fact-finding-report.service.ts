import { Injectable } from '@angular/core';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactFindingReportService implements IManageService, IManageSingleReport {
  baseUrl: any;
  token: any;

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Dop_Fact_Finding_Report[0].url.production;
    this.token = environment.headerauthen;
  }
  filters(filter: string, name: string, lname?: string[], data?: any, latsName?: string[], offSet?: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    if (name == 'fullName' && filter != '') {
      let fullName = filter.split(' ')
      let firstName = fullName[0]
      let lastName = fullName[1]
      return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&page=0&size=100&sort=id%20ASC`,httpOptions);
    } else if (name == 'fullNameAndPrison' && filter != '') {
      let fullNameAndPrison = filter.split(' ')
      let firstName = fullNameAndPrison[0]
      let lastName = fullNameAndPrison[1]
      let prison = fullNameAndPrison[2]
      return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&prison=${prison}&page=0&size=100&sort=id%20ASC`,httpOptions);
    } else if (name == 'firstNameAndPrison' && filter != '') {
      let firstNameAndPrison = filter.split(' ')
      let firstName = firstNameAndPrison[0]
      let prison = firstNameAndPrison[1]
      return this.http.get(`${this.baseUrl}?firstName=${firstName}&prison=${prison}&page=0&size=100&sort=id%20ASC`,httpOptions);
    } else if (name == 'lastNameAndPrison' && filter != '') {
      let lastNameAndPrison = filter.split(' ')
      let lastName = lastNameAndPrison[0]
      let prison = lastNameAndPrison[1]
      return this.http.get(`${this.baseUrl}?lastName=${lastName}&prison=${prison}&page=0&size=100&sort=id%20ASC`,httpOptions);
    } else if (name == 'citizenCardNumberAndPrison' && filter != '') {
      let citizenCardNumberAndPrison = filter.split(' ')
      let citizenCardNumber = citizenCardNumberAndPrison[0]
      let prison = citizenCardNumberAndPrison[1]
      return this.http.get(`${this.baseUrl}?citizenCardNumber=${citizenCardNumber}&prison=${prison}&page=0&size=100&sort=id%20ASC`,httpOptions);
    } else {
      return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sort=id%20ASC`,httpOptions);
    }
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string, dataSetId?: string) {
    return this.http.get(`/assets/data/dop-fact-finding-report.json`);
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
}
