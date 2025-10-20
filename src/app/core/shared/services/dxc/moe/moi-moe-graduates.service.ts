import { Injectable } from '@angular/core';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoiMoeGraduatesService implements IManageService, IManageSingleReport {
  baseUrl: string = environment.Dxc_Model_Moi_Moe_Graduates[0].url.production;
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Moi_Moe_Graduates[0].url.production;
  }
  filters(filter: string, name: string, lname?: string[], data?: any, latsName?: string[], offSet?: any) {
    return this.http.get('assets/data/moi-moe-graduates.json')
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string, dataSetId?: string) {
    throw new Error('Method not implemented.');
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
