import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IManageService , IManageSingleReport} from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiDopaAliensService implements IManageService , IManageSingleReport {
  headers: string;
  arrRequestors: any;
  apiUrl: string = environment.Dxc_Model_Dopa_Moi_Aliens[0].url.production;
  baseUrl: string = environment.Dxc_Model_Dopa_Moi_Aliens[0].url.production;
  searchByCitizenNumber: string = environment.Dxc_Model_Dopa_Moi_Aliens[0].queryPattern.searchByCitizenNumber;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Dopa_Moi_Aliens[0].url.production;
  }

  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    const citizenCardNumber = id;
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/moi-dopa-aliens?transactionId=${transactionId}`, httpOptions);
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
    return this.http.get(`${this.baseUrl}/${filter}/moi-dopa-aliens`, httpOptions);
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
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
 
}
