import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';


@Injectable({
  providedIn: 'root'
})
export class WorkforceDevelopmentsService implements IManageService, IManageSingleReport {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Dsd_Moi_Workforce_Developments[0].url.production;
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
    return this.http.get(`${this.baseUrl}/${filter}/mol-dsd-workforce-developments`, httpOptions);
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
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/mol-dsd-workforce-developments?transactionId=${transactionId}`, httpOptions);
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?&lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
}
