import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dxc_Model_Dopa_Moi_Death_Certificates } from '../../../models/Dxc_Model_Dopa_Moi_Death_Certificates';
import { IManageService , IManageSingleReport} from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiDopaDeathCertificatesService implements IManageService , IManageSingleReport {
  // tslint:disable-next-line: member-ordering
  headers: string;
  // tslint:disable-next-line: member-ordering
  arrRequestors: any;
  // tslint:disable-next-line: member-ordering
  apiUrl: string = environment.Dxc_Model_Dopa_Moi_Death_Certificates[0].url.production;
  // tslint:disable-next-line: member-ordering
  baseUrl: string = environment.Dxc_Model_Dopa_Moi_Death_Certificates[0].url.production;
  // tslint:disable-next-line: member-ordering
  searchByCitizenNumber: string = environment.Dxc_Model_Dopa_Moi_Death_Certificates[0].queryPattern.searchByCitizenNumber;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Dopa_Moi_Death_Certificates[0].url.production;
  }
  findByCID(id: string, page: number, firstOffset: number,transactionId: string) {
    const citizenCardNumber = id;
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/moi-dopa-death-certificates?transactionId=${transactionId}`, httpOptions);
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
    throw new Error('Method not implemented.');
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
    const firstName = fn;
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  filters(filter: string, name: string) {
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/${filter}/moi-dopa-death-certificates`, httpOptions);
  }

}
