import { Injectable } from '@angular/core';
import { PrisonerServiceImp } from '../../../services/dxc/doc/PrisonerServiceImp';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable()
export class PrisonerService implements PrisonerServiceImp, IManageService, IManageSingleReport {
  headers: string;
  apiUrl: string;
  baseUrl: string = environment.Dxc_Model_Doc_Prisoner[0].url.production;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Doc_Prisoner[0].url.production;
  }

  filters(filter: string, basicSearch: string) {
    if (basicSearch == 'fullName' && filter != '') {
      let fullName = filter.split(' ')
      let firstName = fullName[0]
      let lastName = fullName[1]
      return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&page=0&size=100&sortDirection=ASC`);
    } else {
      return this.http.get(`${this.baseUrl}?${basicSearch}=${filter}&page=0&size=100&sortDirection=ASC`);
    }
  }

  getHtml(selectData: any, title: string) {
  }

  viewgetHtml(selectData: any, title: string) {
  }

  findByCID(id: string, page: number, firstOffset: number,transactionId: string) {
    const citizenCardNumber = id;
    return this.http.get(`${this.baseUrl}?citizenCardNumber=${citizenCardNumber}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByPN(pn: string, page: number, firstOffset: number) {
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  readAll() {
  }
}

