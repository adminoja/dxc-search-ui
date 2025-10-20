import { IManageService, IManageSingleReport } from './../../manageservice.interface';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { docremandee } from '../../../services/dxc/doc/remandee.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemandeeService implements docremandee, IManageService, IManageSingleReport {
  headers: string;
  apiUrl: string;
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Doc_Remandee[0].url.production;
  }

  filters(filter: any, name: string) {
    if (name == 'fullName' && filter != '') {
      let fullName = filter.split(' ')
      let firstName = fullName[0]
      let lastName = fullName[1]
      return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&page=0&size=100&sortDirection=ASC`);
    } else {
      return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
    }
  }

  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
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

  readAll() {
    throw new Error('Method not implemented.');
  }
  findByID(id: string, page: number, firstOffset: number) {
    throw new Error('Method not implemented.');
  }
}
