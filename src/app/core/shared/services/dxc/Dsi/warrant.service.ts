import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่

// import { Dxc_Model_Dsi_Warrant } from '../../../models/Dxc_Model_Dsi_Warrant';
import { environment } from '../../../../../../environments/environment';
import { warrantinterface } from '../../../services/dxc/Dsi/warrant.interface';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';

@Injectable({
  providedIn: 'root'
})
export class DsiWarrantService implements IManageService , IManageSingleReport{
  baseUrl: string;
  headers: string;
  token: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Dsi_Warrant[0].url.production;
    this.token = environment.headerauthen;
  }

  findByCID(id: string, page: number, firstOffset: number) {
    const idCard = id
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`${this.baseUrl}?idCard=${idCard}`, httpOptions)
    // return this.http.get(`assets/data/dsi-warrant.json`);
  }
  filters(filter: string, name: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`${this.baseUrl}?idCard=${filter}`,httpOptions)

    // return this.http.get(`assets/data/dsi-warrant.json`);
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
}