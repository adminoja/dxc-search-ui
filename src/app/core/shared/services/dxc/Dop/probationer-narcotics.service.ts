import { Injectable } from '@angular/core';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProbationerNarcoticsService implements IManageService, IManageSingleReport {
  baseUrl: string 
  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Dop_Probationer_Narcotics[0].url.production;
  }
  filters(filter: string, name: string, lname?: string[], data?: any, latsName?: string[], offSet?: any) {
    return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC&sortProperties=id
    `);
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string, dataSetId?: string) {
    // return this.http.get(`/assets/data/probationer-narcotics.json`);
    const idCardNo = id;
    return this.http.get(`${this.baseUrl}?idCardNo=${idCardNo}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
}
