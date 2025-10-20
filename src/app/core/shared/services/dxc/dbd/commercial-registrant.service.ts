import { IManageSingleReport } from './../../manageservice.interface';
import { Injectable } from '@angular/core';
import { IManageService } from '../../manageservice.interface';
import { environment } from '../../../../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { commercialregistrantinterface } from './commercial-registrant.interface';
import { Observable, Subject } from 'rxjs';
import xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class CommercialRegistrantService implements commercialregistrantinterface, IManageService, IManageSingleReport {
  apiUrl: string;
  headers: string;
  token: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.Dxc_Model_Dbd_CommercialRegistrant[0].url.production;
    this.token = environment.headerauthen;
  }

  filters(filter: string, name: string) {
    // return this.http.get('assets/data/dbd-juristic-registration.json');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': this.token
      }),
    };
    return this.http.get(`${this.apiUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`,httpOptions);
  }

  // filters(filter: string, name: string): Observable<any> {
  //   // return this.http.get(`${this.baseUrl}?${name}=${filter}&page=0&size=100&sortDirection=ASC`);
  //   const nin = localStorage.getItem('nin');
  //   const subject = new Subject<any>();
  //   this.http.get(`${this.apiUrl}/?&criteria=commercialRegistrant.id%20like%20%27%25${filter}%25%27%20&like=0&user_citizen=${nin}&req_user_citizen=${nin}&userCitizenNumber=${nin}&token=`, {
  //     headers: new HttpHeaders()
  //       .set('Content-Type', 'text/xml')
  //       .append('Access-Control-Allow-Methods', 'GET')
  //       .append('Access-Control-Allow-Origin', '*')
  //       .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
  //     responseType: 'text'
  //   }).subscribe(data => {
  //     let jsonObj = [];
  //     this.SoapApiDriverLisense(data)
  //       .then((data) => {
  //         console.log(data)
  //         data[0].content.forEach(element => {
  //           jsonObj.push({
  //             content: [{
  //               juristicType: element['juristicType'][0],
  //               registerDate: element['registerDate'][0],
  //               juristicId: element['juristicId'][0],
  //               oldJuristicId: element['oldJuristicId'][0],
  //               juristicName: element['juristicName'][0],
  //               juristicNameEng: element['juristicNameEng'][0],
  //               numberOfCommittee: element['numberOfCommittee'][0],
  //               registerCapital: element['registerCapital'][0],
  //               paidRegisterCapital: element['paidRegisterCapital'][0],
  //               numberOfObjective: element['numberOfObjective'][0],
  //               numberOfPageOfObjective: element['numberOfPageOfObjective'][0],
  //               address: element['address'][0],
  //               juristicStatus: element['juristicStatus'][0],
  //               tsic: element['tsic'][0],
  //               committees: element['committees'][0],
  //             }]
  //           }
  //           );
  //         });
  //         subject.next(jsonObj[0]);
  //       });
  //   });
  //   return subject.asObservable();
  // }

  getHtml(selectData: any, title: string) {
  }

  viewgetHtml(selectData: any, title: string) {
  }

  findByCID(id: string, page: number, firstOffset: number) {
    // const citizenCardNumber = id;
    // return this.http.get('assets/data/dbd-commercial-registrant.json');
  }

  findByFN(fn: string, page: number, firstOffset: number, transactionId: string) {
  }
  findByLN(ln: string, page: number, firstOffset: number, transactionId: string) {
  }
  findByFullName(fn: string, ln: string, page: number, firstOffset: number, transactionId: string) {
  }

  readAll() {
  }
  findByID(id: string) {
  }
  async SoapApiDriverLisense(data) {
    return await new Promise(resolve => {
      // tslint:disable-next-line:one-variable-per-declaration
      let k: string | number, arr = [], parser = new xml2js.Parser({ trim: true, explicitArray: true });
      parser.parseString(data, function (err, result) {
        const obj = result;
        // tslint:disable-next-line:forin
        for (k in obj.result.data[0].commercialRegistrant[0]) {
          const value = obj.result.data[0].commercialRegistrant[0];
          const object = {
            content: [
              value
            ]
          };
          arr.push(object);
        }
        resolve(arr);
      });
    });
  }
}
