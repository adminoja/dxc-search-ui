import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่

import { environment } from '../../../../../../environments/environment';
import { moidopaaddresses } from '../../../services/dxc/dopa/moi-dopa-addresses.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dxc_Model_Dopa_Moi_Addresses } from '../../../models/Dxc_Model_Dopa_Moi_Addresses';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiDopaAddressesService implements IManageService, IManageSingleReport {
  headers: string;
  arrRequestors: any;
  url: any;
  apiUrl: string = environment.Dxc_Model_Dopa_Moi_Addresses[0].url.production;
  baseUrl: string = environment.Dxc_Model_Dopa_Moi_Addresses[0].url.production;
  searchByCitizenNumber: string = environment.Dxc_Model_Dopa_Moi_Addresses[0].queryPattern.searchByCitizenNumber;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Dopa_Moi_Addresses[0].url.production;
    this.url = 'assets/data/moi-dopa-addresses.json';
  }

  filters(filter: string, name: string) {
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/${filter}/moi-dopa-addresses/`, httpOptions);
  }
  getHtml(selectData: any, title: string) {

  }
  viewgetHtml(selectData: any, title: string) {

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
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/moi-dopa-addresses?transactionId=${transactionId}`, httpOptions);
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const lastName = ln;
    return this.http.get(`${this.apiUrl}?&lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
}

