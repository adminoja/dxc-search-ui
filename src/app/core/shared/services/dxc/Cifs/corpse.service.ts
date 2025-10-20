import { Injectable } from '@angular/core';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorpseService implements IManageService, IManageSingleReport {
  baseUrl: string
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Cifs_Corpse[0].url.production;
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const citizenCardNumber = id;
    return this.http.get(`${this.baseUrl}?personNationalityText=${citizenCardNumber}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    return this.http.get(`${this.baseUrl}?personGivenName=${firstName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?personSurName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?personGivenName=${firstName}&personSurName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  filters(filter: string, name: string) {
    if (name == 'fullName' && filter != '') {
      let fullName = filter.split(' ')
      let firstName = fullName[0]
      let lastName = fullName[1]
      return this.http.get(`${this.baseUrl}?personGivenName=${firstName}&personSurName=${lastName}&page=0&size=100&sortDirection=ASC`);
    } else {
      return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
    }
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }

}

