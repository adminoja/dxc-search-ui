import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dxc_Model_Moi_Dopa_Birth_Certificates } from '../../../models/Dxc_Model_Dopa_Moi_Birth_Certificates';
import { IManageSingleReport, IManageService } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiDopaBirthCertificatesService implements IManageService , IManageSingleReport {
  headers: string;
  arrRequestors: any;
  apiUrl: string = environment.Dxc_Model_Moi_Dopa_Birth_Certificates[0].url.production;
  baseUrl: string = environment.Dxc_Model_Moi_Dopa_Birth_Certificates[0].url.production;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Moi_Dopa_Birth_Certificates[0].url.production;
    this.baseUrl = environment.Dxc_Model_Moi_Dopa_Birth_Certificates[0].url.production;
  }

  findByID(id: string, page: number, firstOffset: number, transactionId: string) {
    const citizenCardNumber = id;
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(this.apiUrl + '/' + citizenCardNumber + `/moi-dopa-birth-certificates`, httpOptions);
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
    return this.http.get(`${this.baseUrl}/${filter}/moi-dopa-birth-certificates`, httpOptions);
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
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/moi-dopa-birth-certificates?transactionId=${transactionId}`, httpOptions);
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
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
}
