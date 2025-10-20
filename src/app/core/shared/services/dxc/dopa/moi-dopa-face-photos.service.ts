import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่
import { environment } from '../../../../../../environments/environment';
import { moidopafacephotos } from '../../../services/dxc/dopa/moi-dopa-face-photos.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dxc_Model_Dopa_Moi_Face_Photos } from '../../../models/Dxc_Model_Dopa_Moi_Face_Photos';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class MoiDopaFacePhotosService implements IManageService, IManageSingleReport {
  headers: string;
  arrRequestors: any;
  url: string;
  apiUrl: string = environment.Dxc_Model_Dopa_Moi_Face_Photos[0].url.production;
  baseUrl: string = environment.Dxc_Model_Dopa_Moi_Face_Photos[0].url.production;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Dopa_Moi_Face_Photos[0].url.production;
    this.url = 'assets/data/moi-dopa-person-face-photo.json';
  }
  filters(filter: string, basicSearch: string) {
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/${filter}/moi-dopa-person-face-photos`, httpOptions);
  }
  getHtml(selectData: any, title: string) {

  }
  viewgetHtml(selectData: any, title: string) {

  }
  findByCID(id: string, page: number, firstOffset: number ,transactionId: string) {
    const citizenCardNumber = id;
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}/${citizenCardNumber}/moi-dopa-person-face-photos?transactionId=${transactionId}`, httpOptions);
  }
  findByFN(fn: string, page: number, firstOffset: number ,transactionId: string) {
    const firstName = fn;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }

  findByLN(ln: string, page: number, firstOffset: number ,transactionId: string) {
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number ,transactionId: string) {
    const firstName = fn;
    const lastName = ln;
    return this.http.get(`${this.baseUrl}?firstName=${firstName}&lastName=${lastName}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`);
  }
}

