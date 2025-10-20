import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class NarcoticOffenderService implements IManageService , IManageSingleReport{

  baseUrl: string = environment.Dxc_Model_Oncb_NarcoticOffender[0].url.production;
  searchByCitizenNumber: string = environment.Dxc_Model_Oncb_NarcoticOffender[0].queryPattern.searchByCitizenNumber;
  searchByfirstName: string = environment.Dxc_Model_Oncb_NarcoticOffender[0].queryPattern.searchByfirstName;
  searchBylastName: string = environment.Dxc_Model_Oncb_NarcoticOffender[0].queryPattern.searchBylastName;
  searchByreportedYear: string = environment.Dxc_Model_Oncb_NarcoticOffender[0].queryPattern.searchByreportedYear;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Oncb_NarcoticOffender[0].url.production;
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
    if (name == 'fullName' && filter != '') {
        let fullName = filter.split(' ')
        let firstName = fullName[0]
        let lastName = fullName[1]
        return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&page=0&size=100&sortDirection=ASC`);
    } else {
        return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
    }
  }
  getHtml(selectData: any, title: string) { }
  viewgetHtml(selectData: any, title: string) { }
}
