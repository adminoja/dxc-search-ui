import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { moidopaeducationbackgroundes } from '../../../services/dxc/dopa/moi-dopa-education-backgroundes.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiDopaEducationBackgroundesService implements moidopaeducationbackgroundes, IManageService, IManageSingleReport {
  apiUrl: string;
  headers: string;
  baseUrl: string = environment.Dxc_Model_Moi_Dopa_Education_Backgroundes[0].url.production;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Moi_Dopa_Education_Backgroundes[0].url.production;
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
    return this.http.get(`${this.baseUrl}/${filter}/moi-dopa-education-backgroundes`, httpOptions);
  }

  getHtml(selectData: any, title: string) {
  }

  viewgetHtml(selectData: any, title: string) {
  }

  findByCID(id: string, page: number, firstOffset: number, transactionId:string) {
    const citizenCardNumber = id;
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/moi-dopa-education-backgroundes`, httpOptions);
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

  findByID(id: string, page: number, firstOffset: number) {
  }

  readAll() { }

}
