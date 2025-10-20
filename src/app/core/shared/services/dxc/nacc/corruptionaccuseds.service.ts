import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorruptionaccusedsService implements IManageService, IManageSingleReport {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Nacc_Moi_Corruption_Accuseds[0].url.production;
  }

  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const nin = localStorage.getItem('nin');
    const citizenCardNumber = id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/nacc-it-corruption-accuseds?transactionId=${transactionId}`, httpOptions);
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
    return this.http.get(`${this.baseUrl}/${filter}/nacc-it-corruption-accuseds`, httpOptions);
  }
  getHtml(selectData: any, title: string) {

  }
  viewgetHtml(selectData: any, title: string) {

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
