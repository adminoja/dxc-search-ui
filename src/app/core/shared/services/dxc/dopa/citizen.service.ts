import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // ✅ ใช้ได้ทุกเวอร์ชันใหม่

import { Dxc_Model_Dopa_Citizen } from '../../../models/Dxc_Model_Dopa_Citizen';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import { retry, catchError, shareReplay } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitizenService implements IManageService, IManageSingleReport {
  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const citizenCardNumber = id;
    const nin = localStorage.getItem('nin');
  return this.http.get(`${this.baseUrl}?citizenCardNumber=${citizenCardNumber}&transactionId=${transactionId}&userCitizenNumber=${nin}`);
  // return this.http.get(`assets/data/Citizen_Data.json`);

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
  filters(filter: string, name: string) {
    console.log(filter);
    console.log(name);
    const nin = localStorage.getItem('nin');
    return this.http.get(`${this.baseUrl}?${name}=${filter}&userCitizenNumber=${nin}`).pipe(
      retry(3),
      catchError(() => {
        return EMPTY;
      }),
      shareReplay()
    );
    // return this.http.get(`assets/data/Citizen_Data.json`);

  }
  getHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  viewgetHtml(selectData: any, title: string) {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line: member-ordering
  apiUrl: string;
  // tslint:disable-next-line: member-ordering
  headers: string;

  // tslint:disable-next-line: member-ordering
  baseUrl: string = environment.Dxc_Model_Dopa_Citizen[0].url.production;
  // tslint:disable-next-line: member-ordering
  searchByCitizenNumber: string = environment.Dxc_Model_Dopa_Citizen[0].queryPattern.searchByCitizenNumber;
  // tslint:disable-next-line: member-ordering
  searchByName: string = environment.Dxc_Model_Dopa_Citizen[0].queryPattern.searchByName;
  // tslint:disable-next-line: member-ordering
  arrCitizen: any;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Dopa_Citizen[0].url.production;
    this.baseUrl = environment.Dxc_Model_Dopa_Citizen[0].url.production;
  }



  readDataByCID(citizenCardNumber: string, nin: string) {
    console.log(this.apiUrl);
    console.log(this.baseUrl + this.searchByCitizenNumber);
    return this.arrCitizen;
  }
  readDataByFullName(firstName: string, lastName: string, nin: string) {
    console.log(this.apiUrl);

    this.arrCitizen = this.http.get(this.baseUrl +
      `?userCitizenNumber=${nin}&firstName=${firstName}&lastName=${lastName}`, { observe: 'response' });
    console.log(this.baseUrl + this.searchByName);
    return this.arrCitizen;
  }
  readDataByFname(firstName: string, nin: string) {
    console.log(this.apiUrl);

    this.arrCitizen = this.http.get(this.baseUrl + `?userCitizenNumber=${nin}&firstName=${firstName}`, { observe: 'response' });
    console.log(this.baseUrl + this.searchByName);
    return this.arrCitizen;
  }
  readDataByLname(lastName: string, nin: string) {
    console.log(this.apiUrl);

    this.arrCitizen = this.http.get(this.baseUrl + `?userCitizenNumber=${nin}&lastName=${lastName}`, { observe: 'response' });
    console.log(this.baseUrl + this.searchByName);
    return this.arrCitizen;
  }
  readPerson() {
    return this.http.get(this.baseUrl);
  }

}
