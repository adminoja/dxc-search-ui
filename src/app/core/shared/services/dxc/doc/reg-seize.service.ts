import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IManageSingleReport, IManageService } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class RegSeizeService implements IManageService , IManageSingleReport {

  baseUrl: string = environment.Dxc_Model_Doc_Reg_seize[0].url.production;
  searchByCitizenNumber: string = environment.Dxc_Model_Doc_Reg_seize[0].queryPattern.searchByCitizenNumber;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Doc_Reg_seize[0].url.production;
  }
  /**
   * filter คือ textBox
   * filter เอามาจาก 21
   * ค้นแค่ 1 ฟิล สามารถหาได้ทุกฟิล (LocalSearch)
   */
  filters(filter: string, name: string) {
    return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
  }
  /**
   * ค้นด้วย เลขบัตร
   */
  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const citizenCardNumber = id;
    return this.http.get(`${this.baseUrl}?citizenCardNumber=${citizenCardNumber}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  /**
   * ค้นด้วย ชื่อ
   */
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    const firstname = fn;
    return this.http.get(`${this.baseUrl}?firstname=${firstname}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  /**
   * ค้นด้วย นามสกุล
   */
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    const lastname = ln;
    return this.http.get(`${this.baseUrl}?lastname=${lastname}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const firstname = fn;
    const lastname = ln;
    // return this.http.get(`${this.baseUrl}?firstname=${firstname}&lastName=${lastName}&page=0&size=100&sortDirection=ASC`);
    return this.http.get(`http://127.0.0.1/`);
  }
  getHtml(selectData: any, title: string) { }
  viewgetHtml(selectData: any, title: string) { }

}
