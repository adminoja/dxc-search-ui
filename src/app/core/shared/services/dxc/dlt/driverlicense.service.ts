import { Injectable } from '@angular/core';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverlicenseService implements IManageService, IManageSingleReport {
  baseUrl: string = environment.Dxc_Model_Dlt_DriverLicenseNew[0].url.production;
  searchByCitizenNumber: string = environment.Dxc_Model_Dlt_DriverLicenseNew[0].queryPattern.searchByCitizenNumber;
  content: any[];
  headers: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.Dxc_Model_Dlt_DriverLicenseNew[0].url.production;
  }
  // filters(filter: string, name: string) {
  //   // return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
  //   const nin = localStorage.getItem('nin');
  //   const subject = new Subject<any>();
  //   const options = { // set up the default options 
  //     textKey: 'text', // tag name for text nodes
  //     attrKey: 'attr', // tag for attr groups
  //     cdataKey: 'cdata', // tag for cdata nodes (ignored if mergeCDATA is true)
  //   };
  //   this.content = [];
  //   return this.http.get(`${this.baseUrl}?criteria=driverLicense.citizenCardNumber%3D${filter}&maxNumberOfResults=100&offset=0&userCitizenNumber=${nin}`, {
  //     headers: new HttpHeaders()
  //       .set('Content-Type', 'text/xml')
  //       .append('Access-Control-Allow-Methods', 'GET')
  //       .append('Access-Control-Allow-Origin', '*')
  //       .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
  //     responseType: 'text'
  //   }).pipe(map(data => {
  //     console.log(data);
  //     let parser = new xml2js.Parser({ strict: false, trim: true });
  //     parser.parseString(data, (err, result) => {
  //       console.log(result);
  //       let driverLicense = JSON.parse(JSON.stringify(result['RESULT']['DATA'][0]['DRIVERLICENSE']));
  //       if (driverLicense.length >= 1) {
  //         for (let index = 0; index < driverLicense.length; index++) {
  //           const motor = driverLicense[index];
  //           console.log(motor);
  //           this.mapJson(motor);
  //         }
  //       } else {
  //         this.mapJson(driverLicense);
  //       }
  //     });
  //     let content = { content: this.content };
  //     return content;
  //   }));
  // }

  // findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
  //   const citizenCardNumber = id;
  //   const nin = localStorage.getItem('nin');
  //   const subject = new Subject<any>();
  //   const options = { // set up the default options 
  //     textKey: 'text', // tag name for text nodes
  //     attrKey: 'attr', // tag for attr groups
  //     cdataKey: 'cdata', // tag for cdata nodes (ignored if mergeCDATA is true)
  //   };
  //   this.content = [];
  //   // tslint:disable-next-line:max-line-length
  //   return this.http.get(`${this.baseUrl}?criteria=driverLicense.citizenCardNumber%3D${citizenCardNumber}&transactionId=${transactionId}&maxNumberOfResults=100&offset=0&userCitizenNumber=${nin}`, {
  //     headers: new HttpHeaders()
  //       .set('Content-Type', 'text/xml')
  //       .append('Access-Control-Allow-Methods', 'GET')
  //       .append('Access-Control-Allow-Origin', '*')
  //       .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
  //     responseType: 'text'
  //   }).pipe(map(data => {
  //     // console.log(data);
  //     let parser = new xml2js.Parser({ strict: false, trim: true });
  //     parser.parseString(data, (err, result) => {
  //       console.log(result);
  //       let driverLicense = JSON.parse(JSON.stringify(result['RESULT']['DATA'][0]['DRIVERLICENSE']));
  //       if (driverLicense.length >= 1) {
  //         for (let index = 0; index < driverLicense.length; index++) {
  //           const motor = driverLicense[index];
  //           console.log(motor);
  //           this.mapJson(motor);
  //         }
  //       } else {
  //         this.mapJson(driverLicense);
  //       }
  //     });
  //     let content = { content: this.content };
  //     return content;
  //   }));
  // }
  filters(filter: string, name: string) {
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
        // 'Authorization': 'my-auth-token'
      }),
    };
    return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`,httpOptions);
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const citizenCardNumber = id;
    const nin = localStorage.getItem('nin');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-User-Nin': nin
      }),
    };
    return this.http.get(`${this.baseUrl}?citizenCardNumber=${citizenCardNumber}&transactionId=${transactionId}&page=0&size=100&sortDirection=ASC`,httpOptions);
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
  getHtml(selectData: any, title: string) { }
  viewgetHtml(selectData: any, title: string) { }
  // mapJson(element) {
  //   // console.log(element)
  //   this.content.push(
  //     {
  //       id: element['$']['ID'],
  //       citizenCardNumber: element['CITIZENCARDNUMBER']['0'],
  //       fullName: element['FULLNAME']['0'],
  //       diseasesAndConditionIndex: element['DISEASESANDCONDITIONINDEX']['0'],
  //       address: element['ADDRESS']['0'],
  //       licenseNumber: element['LICENSENUMBER']['0'],
  //       type: element['TYPE']['0'],
  //       officeBranch: element['OFFICEBRANCH']['0'],
  //       idString: element['IDSTRING']['0'],
  //       licenseIssueDate: element['LICENSEISSUEDATE']['0'],
  //       issueDateString: element['ISSUEDATESTRING']['0'],
  //       licenseExpirationDate: element['LICENSEEXPIRATIONDATE']['0'],
  //       expirationDateString: element['EXPIRATIONDATESTRING']['0'],
  //       status: element['STATUS']['0'],
  //       sequester: element['SEQUESTER']['0'],
  //       dataSubmitDate: element['DATASUBMITDATE']['0'],
  //     }
  //   );
  //   console.log(this.content);
  // }
}
