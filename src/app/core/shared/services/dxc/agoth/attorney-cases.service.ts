import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttorneyCasesService implements IManageService , IManageSingleReport {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Agoth_AttorneyMainCases[0].url.production;
  }
  filters(filter: string, name: string) {
    return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
  }
  findByCID(id: string, page: number, firstOffset: number) {
    const citizenCardNumber = id;
    return this.http.get('assets/data/attorney-cases.json');
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
  getHtml(selectData: any, title: string) {}
  viewgetHtml(selectData: any, title: string) {}

}
