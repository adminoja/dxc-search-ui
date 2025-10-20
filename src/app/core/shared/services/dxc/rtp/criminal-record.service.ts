import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class CriminalRecordService implements IManageService, IManageSingleReport {

  // baseUrl: string = environment.Dxc_Model_Rtp_CriminalCase[0].url.production;
  baseUrl: string;
  token: string;
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Rtp_CriminalRecord[0].url.production;
    this.token = environment.headerauthen;
  }
  filters(filter: string, name: string, lname?: string[], data?: any, latsName?: string[], offSet?: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`${this.baseUrl}/?${name}=${filter}&page=0&size=10&orders=id%20DESC`,httpOptions);
    // return this.http.get(`/assets/data/rtp-criminal-record.json`);
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string, dataSetId?: string) {
    const idNo = id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`${this.baseUrl}/?idNo=${idNo}&transactionId=${transactionId}&page=0&size=10&orders=id%20DESC`,httpOptions);
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
