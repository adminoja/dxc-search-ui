import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {IManageSingleReport, IManageService} from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class ReleasedPrisonersServiceService implements IManageService, IManageSingleReport{
  baseUrl: string;
  constructor(private http: HttpClient) {
    // this.baseUrl = environment.Dxc_Model_Doc_ReleasedPrisoners[0].url.production;
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
  filters(filter: string, name: string) {
    return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
}
