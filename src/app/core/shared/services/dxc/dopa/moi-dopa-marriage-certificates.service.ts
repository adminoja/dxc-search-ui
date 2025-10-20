import { IManageSingleReport } from './../../manageservice.interface';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่

import { environment } from '../../../../../../environments/environment';
import { moidopmarriagecertificates } from '../../../services/dxc/dopa/moi-dopa-marriage-certificates.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dxc_Model_Moi_Dopa_Marriage_Certificates } from '../../../models/Dxc_Model_Dopa_Moi_Marriage_Certificates';
import { IManageService } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiDopaMarriageCertificatesService implements IManageService , IManageSingleReport {
  headers: string;
  url: string;
  arrRequestors: any;
  apiUrl: string = environment.Dxc_Model_Moi_Dopa_Marriage_Certificates[0].url.production;
  baseUrl: string = environment.Dxc_Model_Moi_Dopa_Marriage_Certificates[0].url.production;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Moi_Dopa_Marriage_Certificates[0].url.production;
    this.url = environment.Dxc_Model_Moi_Dopa_Marriage_Certificates[0].url.production;
  }

  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const citizenCardNumber = id;
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/moi-dopa-marriage-certificates?transactionId=${transactionId}`, httpOptions);

  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  filters(filter: string, basicSearch: string) {
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/${filter}/moi-dopa-marriage-certificates`, httpOptions);
  }

  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
}
