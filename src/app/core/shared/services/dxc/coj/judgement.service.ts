import { retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class JudgementService implements IManageService, IManageSingleReport{

  baseUrl: string;
  baseUrl2: string;
  token: string;
  constructor(private http: HttpClient) { 
    this.baseUrl = environment.Dxc_Model_Coj_Judgement[0].url.production;
    this.baseUrl2 = environment.Dxc_Model_Coj_Judgement[0].url.production2;
    this.token = environment.headerauthen;
  }
  filters(filter: string, name: string, lname?: string[], data?: any, latsName?: string[], offSet?: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    if (name == 'fullName' && filter != '') {
      let fullName = filter.split(' ');
      let blackNo = fullName[0];
      let courtCode = fullName[1];
      return this.http.get(`${this.baseUrl}?courtCode=${courtCode}&blackNo=${blackNo}&page=0&size=10&sortDirection=ASC`,httpOptions).pipe(retry(5));
    } else {
      return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=10&sortDirection=ASC`,httpOptions).pipe(retry(5));
    }
  }
  getFile(fileId:string): Observable<any> {
    const httpOptions:Object = {
       headers: new HttpHeaders({
        //  'Authorization': this.token,
       }),
       responseType: 'blob',
       observe: 'response'
     };
     return this.http.get(`${this.baseUrl2}/${fileId}`, httpOptions).pipe(retry(5));
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
