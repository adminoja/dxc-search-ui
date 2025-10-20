import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class CriminalCaseService implements IManageService, IManageSingleReport {

  // baseUrl: string = environment.Dxc_Model_Rtp_CriminalCase[0].url.production;
  baseUrl: string;
  token: string;
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Rtp_CriminalCase[0].url.production;
    this.token = environment.headerauthen;
  }
  
  findByCID(id: string, page: number, firstOffset: number, transactionId: string, dataSetId?: string) {
    const citizenCardNumber = id;
    return this.http.get(`/assets/data/rtp-criminal-case.json`);

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
  filters(filter: string, name: string) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    if (name == 'flname' && filter != '') {
      let flname = filter.split(' ')
      let fname = flname[0]
      let lname = flname[1]
      return this.http.get(`${this.baseUrl}/?fname=${fname}&lname=${lname}&page=0&size=100`,httpOptions);
    } else {
      console.log(filter)
      return this.http.get(`${this.baseUrl}/?${name}=${filter}&page=0&size=100`,httpOptions);
    }
    
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }


}
