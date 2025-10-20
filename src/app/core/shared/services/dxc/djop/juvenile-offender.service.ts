import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่

import { IDxc_Model_Djop_JuvenileOffender } from '../../../models/Dxc_Model_Djop_JuvenileOffender';
import { environment } from '../../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { juvenileoffenderinterface } from '../../../services/dxc/djop/juvenile-offender.interface';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class JuvenileOffenderService implements  IManageService , IManageSingleReport{

  apiUrl: string;
  headers: string;
  baseUrl: string = environment.Dxc_Model_Djop_JuvenileOffender[0].url.production;
  arrJuvenileOffender: any;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Djop_JuvenileOffender[0].url.production;//ทดสอบที่เครื่อง
    this.baseUrl = environment.Dxc_Model_Djop_JuvenileOffender[0].url.production;


  }
  findByID(id: string, page: number, firstOffset: number) {

  }
  findByCID(id: string, page: number, firstOffset: number,transactionId: string) {
    const citizenCardNumber = id;
    return this.http.get(`${this.baseUrl}?citizenCardNumber=${citizenCardNumber}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    // console.log("ServicejuvenileOffenderfirstName", firstName);
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const lastName = ln;
    // console.log("ServicejuvenileOffenderlastName", lastName);
    return this.http.get(`${this.baseUrl}?lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  // แบบใหม่
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
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
}
