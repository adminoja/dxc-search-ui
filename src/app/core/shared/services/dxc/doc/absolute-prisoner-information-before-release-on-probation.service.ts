import { Injectable } from '@angular/core';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbsolutePrisonerInformationBeforeReleaseOnProbationService implements IManageService, IManageSingleReport {
  baseUrl: any;
  token: any;
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Doc_Absolute_Prisoner_Information_Before_Release_On_Probation[0].url.production;
    this.token = environment.headerauthen;
  }
  filters(filter: string, name: string, lname?: string[], data?: any, latsName?: string[], offSet?: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    // if (name == 'fullName' && filter != '') {
    //   let fullName = filter.split(' ')
    //   let firstName = fullName[0]
    //   let lastName = fullName[1]
    //   return this.http.get(`/assets/data/doc-absolute-prisoner-information-before-release-on-probation.json`);
    //   // return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&page=0&size=100&sortDirection=ASC`);
    // } else {
    //   return this.http.get(`/assets/data/doc-absolute-prisoner-information-before-release-on-probation.json`);
    //   // return this.http.get(`${this.baseUrl}?${basicSearch}=${filter}&page=0&size=100&sortDirection=ASC`);
    // }
    return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&orders=id%20ASC`,httpOptions);
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string, dataSetId?: string) {
    return this.http.get(`/assets/data/doc-absolute-prisoner-information-before-release-on-probation.json`);
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
