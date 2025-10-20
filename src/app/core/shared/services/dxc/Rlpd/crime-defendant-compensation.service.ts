import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class CrimeDefendantCompensationService implements IManageService , IManageSingleReport {

  baseUrl: string = environment.Dxc_Model_Rlpd_CrimeDefendantCompensation[0].url.production;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Rlpd_CrimeDefendantCompensation[0].url.production;
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const dftCitizenId = id;
    return this.http.get(`${this.baseUrl}?dftCitizenId=${dftCitizenId}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const dftAttorneyGivenName = fn;
    return this.http.get(`${this.baseUrl}?dftAttorneyGivenName=${dftAttorneyGivenName}&page=0&size=100&sortDirection=ASC`);
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const dftAttorneySurName = ln;
    return this.http.get(`${this.baseUrl}?dftAttorneySurName=${dftAttorneySurName}&page=0&size=100&sortDirection=ASC`);
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const dftAttorneyFullName = fn;
    return this.http.get(`${this.baseUrl}?dftAttorneyFullName=${dftAttorneyFullName}&page=0&size=100&sortDirection=ASC`);
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
