import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class DirectoryDimensionPersonService implements IManageService, IManageSingleReport{

  baseUrl: string
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Idb_DirectoryDimensionPerson[0].url.production;
  }
  filters(filter: string, name: string) {
    if (name == 'fullName' && filter != '') {
      let fullName = filter.split(' ')
      let firstName = fullName[1]
      let lastName = fullName[0]
      return this.http.get(`${this.baseUrl}?accusedsName=${lastName}&accusedsSurname=${firstName}&page=0&size=100&sortDirection=ASC`);
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
  findByCID(id: string, page: number, firstOffset: number) {
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
