import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReasonService {
  baseUrl: string = environment.Dxc_Model_Reason[0].url.production;
  baseUrl1: string = '/dxc-search-service/api/reason/add/'
  constructor(private http: HttpClient) { //ประกาศตัวแปร http เพื่อเรียกใช้

  }

  UpdateReason(personal: string, caseInfo: string, reasons: string, reasons_select: string, user: string, userId: string, agree: string, today: string) {
    console.log(this.baseUrl)
    this.http.post(this.baseUrl, {
      personal: personal,
      caseInfo: caseInfo,
      reasons: reasons,
      agree: agree,
      authenId: user,
      userId: userId,
      timestamp: "",
      reasonsSelect: reasons_select,
    }).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}
