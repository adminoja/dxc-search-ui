import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarLicenseService implements IManageService, IManageSingleReport {
  baseUrl: string = environment.Dxc_Model_Dlt_CarLicenseNew[0].url.production;
  searchByCitizenNumber: string = environment.Dxc_Model_Dlt_CarLicenseNew[0].queryPattern.searchByCitizenNumber;
  content = [];
  token: string;
  constructor(private http: HttpClient,) {
    this.baseUrl = environment.Dxc_Model_Dlt_CarLicenseNew[0].url.production;
    this.token = environment.headerauthen;
  }
  filters(filter: string, name: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    console.log(filter)
    if (name == 'CarLicense' && filter != '') {
      let CarLicense = filter.split(' ')
      let offLocCode = CarLicense[0]
      let plate1 = CarLicense[1]
      let plate2 = CarLicense[2]
      let vehTypeRef = CarLicense[3]
      return this.http.get(`${this.baseUrl}?page=0&size=100&sortDirection=ASC&offLocCode=${offLocCode}&plate1=${plate1}&plate2=${plate2}&vehTypeRef=${vehTypeRef}`,httpOptions);
    } else if (name == 'CidAndCarLicense' && filter != '') {
      let CidAndCarLicense = filter.split(' ')
      let docNo = CidAndCarLicense[0]
      let offLocCode = CidAndCarLicense[1]
      let plate1 = CidAndCarLicense[2]
      let plate2 = CidAndCarLicense[3]
      let vehTypeRef = CidAndCarLicense[4]
      return this.http.get(`${this.baseUrl}?page=0&size=100&sortDirection=ASC&docNo=${docNo}&offLocCode=${offLocCode}&plate1=${plate1}&plate2=${plate2}&vehTypeRef=${vehTypeRef}`,httpOptions);
    } else if (name == 'offLocCode' && filter != '' && filter != 'เลือกจังหวัด'){
      return this.http.get(`${this.baseUrl}?page=0&size=100&sortDirection=ASC&${name}=${filter}`,httpOptions);
    } else if (name == 'vehTypeRef' && filter != '' && filter != 'เลือกประเภท'){
      return this.http.get(`${this.baseUrl}?page=0&size=100&sortDirection=ASC&${name}=${filter}`,httpOptions);
    } else if (name == 'docNo' && filter != ''){
      return this.http.get(`${this.baseUrl}?page=0&size=100&sortDirection=ASC&${name}=${filter}`,httpOptions);
    }
    // return this.http.get(`${this.baseUrl}?page=0&size=100&sortDirection=ASC&${name}=${filter}`,httpOptions);
  }
  getHtml(selectData: any, title: string) {

  }
  viewgetHtml(selectData: any, title: string) {

  }
  findByCID(id: string, page: number, firstOffset: number,transactionId: string) {
    const citizenCardNumber = id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`${this.baseUrl}?page=0&size=100&sortDirection=ASC&docNo=${citizenCardNumber}&transactionId=${transactionId}`,httpOptions);
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

  getVehicleTypeRef() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`/api/qm/v2/dlt/references/vehicle-type-refs`,httpOptions);
  }

  getOffLocCode() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`/api/qm/v2/dlt/references/off-loc-codes`,httpOptions);
  }
}
