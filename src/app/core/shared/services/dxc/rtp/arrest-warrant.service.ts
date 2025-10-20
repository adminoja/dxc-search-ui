import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { NgxXmlToJsonService } from 'ngx-xml-to-json';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IManageService, IManageSingleReport } from '../../manageservice.interface';
import xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class ArrestWarrantService implements IManageService, IManageSingleReport {
  apiUrl: string = environment.Dxc_Model_Rtp_ArrestWarrant[0].url.production;
  baseUrl: string = environment.Dxc_Model_Rtp_ArrestWarrant[0].url.production;
  // searchByCitizenNumber: string = environment.Dxc_Model_Rtp_ArrestWarrant[0].queryPattern.searchByCitizenNumber;
  content = [];
  // constructor(private http: HttpClient, private ngxXmlToJsonService: NgxXmlToJsonService) {
    constructor(private http: HttpClient, ) {
    this.baseUrl = environment.Dxc_Model_Rtp_ArrestWarrant[0].url.production;
  }
  filters(filter: string, name: string) {
    const nin = localStorage.getItem('nin');
    const subject = new Subject<any>();
    const options = { // set up the default options
      textKey: 'text', // tag name for text nodes
      // attrKey: 'attr', // tag for attr groups
      cdataKey: 'cdata', // tag for cdata nodes (ignored if mergeCDATA is true)
    };
    this.content = [];
    if (name == 'fullNameAndCourtName' && filter != '') {
      let fullName = filter.split(' ')
      let firstName = fullName[0]
      let lastName = fullName[1]
      let courtName = fullName[2]
      return this.http.get(`${this.baseUrl}?criteria=arrestWarrant.subjectFullName%20like%20%27%25${firstName}+${lastName}%25%27%20%20and%20arrestWarrant.courtName%20like%20%27%25${courtName}%25%27%20`,{
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
        responseType: 'text'
      })
        .pipe(map(data => {
          let parser = new xml2js.Parser({ strict: false, trim: true });
          parser.parseString(data, (err, result) => {
            let arrestWarrant = JSON.parse(JSON.stringify(result['RESULT']['DATA'][0]['ARRESTWARRANT']));
            if (arrestWarrant.length >= 1) {
              for (let index = 0; index < arrestWarrant.length; index++) {
                const motor = arrestWarrant[index];
                console.log(motor)
                this.mapJson(motor);
              }
            } else {
              this.mapJson(arrestWarrant);
            }
          });
          let content = { content: this.content };
          return content;
        }));
    } else {
      return this.http.get(`${this.baseUrl}?criteria=arrestWarrant.${name}%20like%20%27%25${filter}%25%27%20`, {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
        responseType: 'text'
      })
      .pipe(map(data => {
        let parser = new xml2js.Parser({ strict: false, trim: true });
        parser.parseString(data, (err, result) => {
          let arrestWarrant = JSON.parse(JSON.stringify(result['RESULT']['DATA'][0]['ARRESTWARRANT']));
          if (arrestWarrant.length >= 1) {
            for (let index = 0; index < arrestWarrant.length; index++) {
              const motor = arrestWarrant[index];
              console.log(motor)
              this.mapJson(motor);
            }
          } else {
            this.mapJson(arrestWarrant);
          }
        });
        let content = { content: this.content };
        return content;
      }));
    }
  }
  findByCID(id: string, page: number, firstOffset: number, transactionId: string) {
    const citizenCardNumber = id;
    const nin = localStorage.getItem('nin');
    const subject = new Subject<any>();
    const options = { // set up the default options
      textKey: 'text', // tag name for text nodes
      attrKey: 'attr', // tag for attr groups
      cdataKey: 'cdata', // tag for cdata nodes (ignored if mergeCDATA is true)
    };
    this.content = [];
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.baseUrl}?criteria=arrestWarrant.citizenCardNumber%3D${citizenCardNumber}&transactionId=${transactionId}&maxNumberOfResults=100&offset=0&userCitizenNumber=${nin}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
        .append('Access-Control-Allow-Methods', 'GET')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
      responseType: 'text'
    })
      // .pipe(map(data => {
      //   const obj = this.ngxXmlToJsonService.xmlToJson(data, options);
      //   let arrestWarrant = obj['result']['data']['arrestWarrant'];
      //   if (arrestWarrant.length > 1) {
      //     for (let index = 0; index < arrestWarrant.length; index++) {
      //       const motor = arrestWarrant[index];
      //       if (motor.length > 1) {
      //         for (let j = 0; j < motor.length; j++) {
      //           const motordata = motor[j];
      //           this.mapJson(motordata);
      //         }
      //       } else {
      //         this.mapJson(motor);
      //       }
      //     }
      //   } else {
      //     this.mapJson(arrestWarrant);
      //   }
      //   let content = { content: this.content };
      //   return content;
      // }));
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
  mapJson(element) {
    // console.log(element)
    this.content.push(
      {
        id: element['$']['ID'],
        warrantNumber: element['WARRANTNUMBER']['0'],
        courtName: element['COURTNAME']['0'],
        subjectFullName: element['SUBJECTFULLNAME']['0'],
        effectiveDate: element['EFFECTIVEDATE']['0'],
        expirationDate: element['EXPIRATIONDATE']['0'],
        policeFullName: element['POLICEFULLNAME']['0'],
        policeCaseNumber: element['POLICECASENUMBER']['0'],
        policeCaseOffice: element['POLICECASEOFFICE']['0'],
        undecidedCaseId: '-',
        decidedCaseId: '-',
        allegation: element['ALLEGATION']['0'],
        dataSubmitDate: element['DATASUBMITDATE']['0'],
      }
    );
    console.log(this.content);
  }
}
