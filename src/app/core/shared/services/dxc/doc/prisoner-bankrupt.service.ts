import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PrisonerServiceImp } from './PrisonerServiceImp';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class PrisonerBankruptService implements PrisonerServiceImp, IManageService, IManageSingleReport {
  headers: string;
  apiUrl: string;
  baseUrl: string = environment.Dxc_Model_Doc_Prisoner_Bankrupt[0].url.production;
  
  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Doc_Prisoner_Bankrupt[0].url.production;
  }
  filters(filter: string, basicSearch: string) {
    if (basicSearch == 'fullName' && filter != '') {
      let fullName = filter.split(' ')
      let firstName = fullName[0]
      let lastName = fullName[1]
      return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&page=0&size=100&sortDirection=ASC`);
      // return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&page=0&size=100&sortDirection=ASC`);
    } else {
      return this.http.get(`${this.baseUrl}?${basicSearch}=${filter}&page=0&size=100&sortDirection=ASC`);
      // return this.http.get(`${this.baseUrl}?${basicSearch}=${filter}&page=0&size=100&sortDirection=ASC`);
    }
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  readAll() {
    throw new Error('Method not implemented.');
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    return this.http.get(`/assets/data/doc-prisoner-bankrupt.json`);
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByPN(pn: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }

}
