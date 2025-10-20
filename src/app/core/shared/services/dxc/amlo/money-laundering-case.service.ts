import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoneyLaunderingCaseService implements IManageService, IManageSingleReport {

  baseUrl: string = environment.Dxc_Model_Amlo_Moneylaunderingcase[0].url.production;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Amlo_Moneylaunderingcase[0].url.production;
  }
  filters(filter: string, basicSearch: string) {
    // return this.http.get(`${this.baseUrl}?${basicSearch}=${filter}&page=0&size=100&sortDirection=ASC`);
    return this.http.get('assets/data/almo_data.json');
  }
  findByCID(id: string, page: number, firstOffset: number) {
    // const casename = id;
    // return this.http.get(`${this.baseUrl}?casename=${casename}&page=0&size=100&sortDirection=ASC`);
    // return this.http.get('assets/data/almo_data.json');
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const casename = fn;
    return this.http.get(`${this.baseUrl}?casename=${casename}&page=0&size=100&sortDirection=ASC`);
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const caseLastName = ln;
    return this.http.get(`${this.baseUrl}?caseLastName=${caseLastName}&page=0&size=100&sortDirection=ASC`);
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  getHtml(selectData: any, title: string) {}

  viewgetHtml(selectData: any, title: string) {}
}
