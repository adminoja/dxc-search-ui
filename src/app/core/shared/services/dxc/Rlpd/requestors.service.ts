import { IManageSingleReport, IManageService } from './../../manageservice.interface';
import { Injectable } from '@angular/core';
import { IDxc_Model_Rlpd_Requestors } from '../../../models/Dxc_Model_Rlpd_Requestors';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestorsService implements IManageService , IManageSingleReport {
  apiUrl: string;
  headers: string;
  arrRequestors: any;
  baseUrl: string = environment.Dxc_Model_Rlpd_Requestors[0].url.production;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Rlpd_Requestors[0].url.production;
    // this.baseUrl = environment.Dxc_Model_Rlpd_Requestors[0].url.production;

  }
  filters(filter: string, basicSearch: string) {
    console.log(filter);
    console.log(basicSearch);
    const nin = localStorage.getItem('nin');
    if (basicSearch == 'firstNameLastName' && filter != '') {
      let fullName = filter.split(' ')
      let firstName = fullName[0]
      let lastName = fullName[1]
      return this.http.get(`${this.baseUrl}?personGivenName=${firstName}&personSurName=${lastName}&page=0&size=100&sortDirection=ASC&page=0&size=10&userNin=${nin}`);
    } else {
      return this.http.get(`${this.baseUrl}?${basicSearch}=${filter}&page=0&size=100&sortDirection=ASC&page=0&size=10&userNin=${nin}`);
    }
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const nin = localStorage.getItem('nin');
    const personNationalIdentificationId = id;
    return this.http.get(`${this.baseUrl}?personNationalIdentificationId=${personNationalIdentificationId}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC&userNin=${nin}`);
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const nin = localStorage.getItem('nin');
    const personGivenName = fn;
    return this.http.get(`${this.baseUrl}?personGivenName=${personGivenName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC&userNin=${nin}`);
  }

  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const nin = localStorage.getItem('nin');
    const personSurName = ln;
    return this.http.get(`${this.baseUrl}?personSurName=${personSurName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC&userNin=${nin}`);
  }

  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const nin = localStorage.getItem('nin');
    const personGivenName = fn;
    const personSurName = ln;
    return this.http.get(`${this.baseUrl}?personGivenName=${personGivenName}&personSurName=${personSurName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC&userNin=${nin}`);
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }


}
