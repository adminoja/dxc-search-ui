import {IManageSingleReport, IManageService} from '../../manageservice.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dxc_Model_Dop_Probationer } from '../../../models/Dxc_Model_Dop_Probationer';
import { environment } from '../../../../../../environments/environment';
import { probationerinterface } from '../../../services/dxc/Dop/probationer.interface';

@Injectable({
  providedIn: 'root'
})
export class ProbationerService implements IManageService, IManageSingleReport {
  apiUrl: string;
  headers: string;
  arrProbationer: any;
  baseUrl: string // = environment.Dxc_Model_Dop_Probationer[0].url.production;
  searchByCitizenNumber: string = environment.Dxc_Model_Dop_Probationer[0].queryPattern.searchByCitizenNumber;
  searchByFirstName: string = environment.Dxc_Model_Dop_Probationer[0].queryPattern.searchByFirstName;
  searchByLastName: string = environment.Dxc_Model_Dop_Probationer[0].queryPattern.searchByLastName;
  searchByCaseRegistrationYear: string = environment.Dxc_Model_Dop_Probationer[0].queryPattern.searchByCaseRegistrationYear;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Dop_Probationer[0].url.production;
    this.baseUrl = environment.Dxc_Model_Dop_Probationer[0].url.production;
  }

  findByCID(id: string, page: number, firstOffset: number,transactionId:string) {
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

  findByCRY(cry: string, page: number, firstOffset: number) {
    const caseRegistrationYear = cry;
    return this.http.get(this.apiUrl + this.searchByCaseRegistrationYear + `&caseRegistrationYear=${caseRegistrationYear}&page=0&size=100&sortDirection=ASC`);
  }

  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
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
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
}
