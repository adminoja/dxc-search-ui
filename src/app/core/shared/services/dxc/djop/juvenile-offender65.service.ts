import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class JuvenileOffender65Service implements IManageService, IManageSingleReport {
  baseUrl: string;
  token: string;

  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Djop_JuvenileOffender65[0].url.production;
    this.token = environment.headerauthen;
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string, dataSetId?: string) {
    if(environment.production) {
      const idCardNo = id;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': this.token
        }),
      };
      return this.http.get(`${this.baseUrl}/?idCardNo=${idCardNo}&transactionId=${transactionId}&size=100&sort=id%20ASC`, httpOptions);
    } else {
      const idCardNo = id;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': this.token
        }),
      };
      return this.http.get(`${this.baseUrl}/?idCardNo=${idCardNo}&transactionId=${transactionId}&size=100&sort=id%20ASC`, httpOptions);
    }    
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    if(environment.production) {
      const jvnFname = fn;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': this.token
        }),
      };
      return this.http.get(`${this.baseUrl}/?jvnFname=${jvnFname}&transactionId=${transactionId}&size=100&sort=id%20ASC`, httpOptions);
    } else {
      const jvnFname = fn;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': this.token
        }),
      };
      return this.http.get(`${this.baseUrl}/?jvnFname=${jvnFname}&transactionId=${transactionId}&size=100&sort=id%20ASC`, httpOptions);
    }  
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    if(environment.production) {
      const jvnLname = ln;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': this.token
        }),
      };
      return this.http.get(`${this.baseUrl}/?jvnLname=${jvnLname}&transactionId=${transactionId}&size=100&sort=id%20ASC`, httpOptions);
    } else {
      const jvnLname = ln;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': this.token
        }),
      };
      return this.http.get(`${this.baseUrl}/?jvnLname=${jvnLname}&transactionId=${transactionId}&size=100&sort=id%20ASC`, httpOptions);
    }  
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    console.log(fn)
    console.log(ln)
      console.log('เข้า service มั้ย')
      const jvnFname = fn;
      const jvnLname = ln;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.token
        }),
      };
      return this.http.get(`${this.baseUrl}/?jvnFname=${jvnFname}&jvnLname=${jvnLname}&transactionId=${transactionId}&size=100&sort=id%20ASC`, httpOptions);
    // } 
  }
  filters(filter: string, basicSearch: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`${this.baseUrl}/?${basicSearch}=${filter}&page=0&size=100&sort=id%20ASC`, httpOptions);

  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
}
