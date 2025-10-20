import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class BankruptcyCaseService implements IManageService , IManageSingleReport{
  baseUrl: string = environment.Dxc_Model_Led_BankruptcyCase[0].url.production;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Led_BankruptcyCase[0].url.production;
  }

  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const defendantId = id;
    return this.http.get(`${this.baseUrl}?defendantId=${defendantId}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const defendantName = fn;
    return this.http.get(`${this.baseUrl}?defendantName=${defendantName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const defendantSurname = ln;
    return this.http.get(`${this.baseUrl}?defendantSurname=${defendantSurname}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const defendantName = fn;
    const defendantSurname = ln;
    return this.http.get(`${this.baseUrl}?defendantName=${defendantName}&defendantSurname=${defendantSurname}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  filters(filter: string, name: string) {
    if (name == 'fNameLName' && filter != '') {
      let fullName = filter.split(' ')
      let firstName = fullName[0]
      let lastName = fullName[1]
      return this.http.get(`${this.baseUrl}?defendantName=${firstName}&defendantSurname=${lastName}&page=0&size=100&sortDirection=ASC`);
    } else {
      return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
    }
  }

  getHtml(selectData: any, title: string) { }
  viewgetHtml(selectData: any, title: string) { }
}
