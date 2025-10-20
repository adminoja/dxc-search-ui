import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class TravelInformationService implements IManageService, IManageSingleReport {
  baseUrl: string;
  token: string;
  

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Rtp_TravelInformation[0].url.production;
    this.token = environment.headerauthen;
  }
  filters(filter: string, name: string, lname?: string[]) {
    // const nin = localStorage.getItem('nin');
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'X-User-Nin': nin
    //     // 'Authorization': 'my-auth-token'
    //   }),
    // };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`${this.baseUrl}/?${name}=${filter}&page=0&size=10&orders=dataId%20DESC`,httpOptions);
    // return this.http.get(`${this.baseUrl}/${filter}/rtp-travel-information`, httpOptions);
    // return this.http.get(`/assets/data/rtp-travel-information.json`);
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const citizenCardNumber = id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    // return this.http.get(`${this.baseUrl}/${citizenCardNumber}/rtp-travel-information?transactionId=${transactionId}`, httpOptions);
    return this.http.get(`${this.baseUrl}/?idCardNo=${citizenCardNumber}&transactionId=${transactionId}&page=0&size=10&orders=dataId%20DESC`,httpOptions);
    
    // const nin = localStorage.getItem('nin');
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'X-User-Nin': nin
    //     // 'Authorization': 'my-auth-token'
    //   }),
    // };
    // return this.http.get(`${this.baseUrl}/${citizenCardNumber}/rtp-travel-information?transactionId=${transactionId}`, httpOptions);
    // return this.http.get(`/assets/data/rtp-travel-information.json`);
  }
  findByFN(fn: string, page: number, firstOffset: number) {
    throw new Error('Method not implemented.');
  }
  findByLN(ln: string, page: number, firstOffset: number) {
    throw new Error('Method not implemented.');
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number) {
    throw new Error('Method not implemented.');
  }
}
