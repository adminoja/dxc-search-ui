import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiDoeAlienWorkforcesService implements IManageService , IManageSingleReport {

  baseUrl: string = environment.Dxc_Model_Doe_Moi_Alien_Workforces[0].url.production;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Doe_Moi_Alien_Workforces[0].url.production;
  }

  filters(filter: string, name: string) {
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
      }),
    };
    return this.http.get(`${this.baseUrl}/${filter}/mol-doe-alien-workforces`, httpOptions);
  }
  findByCID(id: string, page: number, firstOffset: number,transactionId: string) {
    const citizenCardNumber = id;
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
      }),
    };
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/mol-doe-alien-workforces?transactionId=${transactionId}`, httpOptions);
  }
  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {}
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {}
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {}
  getHtml(selectData: any, title: string) {}
  viewgetHtml(selectData: any, title: string) {}
}

