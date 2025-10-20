import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { moidopastudents } from '../dopa/moi-dopa-students.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiMoeStudentsService implements moidopastudents, IManageService, IManageSingleReport {
  apiUrl: string;
  headers: string;
  baseUrl: string = environment.Dxc_Model_Moi_Moe_Students[0].url.production;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Moi_Moe_Students[0].url.production;
  }

  filters(filter: string, basicSearch: string) {
    // const nin = localStorage.getItem('nin');
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'X-User-Nin': nin
    //     // 'Authorization': 'my-auth-token'
    //   }),
    // };
    // return this.http.get(`${this.baseUrl}/${filter}/moi-dopa-students`, httpOptions);
    return this.http.get('assets/data/moi-moe-students.json')
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
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/moi-dopa-students`, httpOptions);
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
  readAll() {
  }
  findByID(id: string, page: number, firstOffset: number) {
  }
}
