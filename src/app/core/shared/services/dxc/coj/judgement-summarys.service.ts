import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class JudgementSummarysService implements IManageService, IManageSingleReport {
  baseUrl: string;
  token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Coj_JudgementSummarys[0].url.production;
    this.token = environment.headerauthen;
  }
  filters(filter: string, name: string, lname?: string[], data?: any, latsName?: string[]) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    if (name == 'fullName' && filter != '') {
      let fullName = filter.split(' ');
      let caseNo = fullName[0];
      let court = fullName[1];
      // const encodedURL = encodeURI(caseNo);
      // console.log(encodedURL)
      return this.http.get(`${this.baseUrl}?caseNo=${caseNo}&court=${court}`,httpOptions);
    } else {
      return this.http.get(`${this.baseUrl}?${name}=${filter}`,httpOptions);
    }
    // return this.http.get(`/assets/data/CojJudgementSummarys.json`);
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
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
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  getCourt(){
    return this.http.get('assets/data/court_data.json');
  }
  // getCourts(): Observable<any>{
  //   return of(this.http.get<any>('assets/data/court_data.json')).pipe(
  //     filter(data=> data['abbr']==='civil')
  //   )
  // }
}
