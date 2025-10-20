import { Dxc_Model_Moi_Dopa_Passports } from 'src/app/core/shared/models/Dxc_Model_Dopa_Moi_Passports';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiDopaPassportsService implements IManageService , IManageSingleReport {
  headers: string;
  arrRequestors: any;
  apiUrl: string = environment.Dxc_Model_Moi_Dopa_Passports[0].url.production;
  baseUrl: string = environment.Dxc_Model_Moi_Dopa_Passports[0].url.production;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Moi_Dopa_Passports[0].url.production;
  }

  findByID(id: string, page: number, firstOffset: number , transactionId: string) {
    const citizenCardNumber = id;
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(this.apiUrl + '/' + citizenCardNumber + `/moi-dopa-passports?transactionId=${transactionId}`, httpOptions);
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
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/moi-dopa-passports`, httpOptions);
  }

  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    return null;
  }

  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    return null;
  }

  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    return null;
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
    return this.http.get(`${this.baseUrl}/${filter}/moi-dopa-passports`, httpOptions);
  }

  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
}
