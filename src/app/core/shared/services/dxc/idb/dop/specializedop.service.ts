import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../../manageservice.interface';
import { Request, RootObject } from '../../../../models/searches-api/createSearch';
@Injectable({
  providedIn: 'root'
})
export class SpecializedopService implements IManageService, IManageSingleReport{
  baseUrl: string;
  token: string;
  constructor(private http: HttpClient) {
    this.token = environment.headerauthen;
   }
  filters(filter: string, name: string, lname?: string[], data?: any, latsName?: string[]) {
    throw new Error('Method not implemented.');
  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string, dataSetId?: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    let body: Request;
    body = {
      dataSetId: dataSetId,
      parameters: {
       thaiNin: id
      }
    };
    return this.http.post<RootObject>(`/api/search/searches`,body,httpOptions);
    // return this.http.get<statusSearch.RootObject>(`/dxc-search-service/api/search/searches/274/status`,httpOptions)
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
  getSerchHistory(dataSetId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`/api/search/searches?page=0&size=200&sortDirection=DESC&sortProperties=searchId&requestDataSetId=${dataSetId}`,httpOptions);
    // return this.http.get('/asset/data/idb-career-report-result.json');
  }
  getSearchById(searchId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`/api/search/searches/${searchId}/result`,httpOptions);
     // return this.http.get('/assets/data/idb-career-report-result.json');
  }
  getTimeline(searchId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`/api/search/searches/${searchId}/result/idb-justice-event-report/timeline/apex-chart-series`,httpOptions)
  }
}
