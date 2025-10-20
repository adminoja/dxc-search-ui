import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dxc_Model_SearchFillter } from '../models/Dxc_Model_SearchFillter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export interface ILogTypeService {
    citizenCardNumber: string,
    transactionId: string,
    logServiceId: string
}
@Injectable({
    providedIn: 'root'
})
export class LogTypeService {
    url: string;
    token: string;
    data: any;
    constructor(private http: HttpClient) {
        this.url = environment.Dxc_Model_LOG_TYPE[0].url.production;
        this.token = environment.headerauthen;
    }

    saveTransection(dataSearch: Dxc_Model_SearchFillter) {
        if(environment.production) {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    // 'Authorization': this.token
                }),
            };
            let transactionId = this.createTransectionId();
            if(dataSearch.citizenCardNumber !== '') {
                return this.http.get<ILogTypeService>(`/api/single-report?citizenCardNumber=${dataSearch.citizenCardNumber}&transactionId=${transactionId}`,
                httpOptions);
            } else if (dataSearch.firstName !== '' && dataSearch.lastname !== '') {
                return this.http.get<ILogTypeService>(`/api/single-report?firstName=${dataSearch.firstName}&lastname=${dataSearch.lastname}&transactionId=${transactionId}`,
                httpOptions);
            } else if (dataSearch.firstName !== '') {
                return this.http.get<ILogTypeService>(`/api/single-report?firstName=${dataSearch.firstName}&transactionId=${transactionId}`,
                httpOptions);
            } else if (dataSearch.lastname !== '') {
                return this.http.get<ILogTypeService>(`/api/single-report?lastname=${dataSearch.lastname}&transactionId=${transactionId}`,
                httpOptions);
            }
          } else {
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    // 'Authorization': this.token
                }),
            };
            let transactionId = this.createTransectionId();
            if(dataSearch.citizenCardNumber !== '') {
                return this.http.get<ILogTypeService>(`/api/single-report?citizenCardNumber=${dataSearch.citizenCardNumber}&transactionId=${transactionId}`,
                httpOptions);
            } else if (dataSearch.firstName !== '' && dataSearch.lastname !== '') {
                return this.http.get<ILogTypeService>(`/api/single-report?firstName=${dataSearch.firstName}&lastname=${dataSearch.lastname}&transactionId=${transactionId}`,
                httpOptions);
            } else if (dataSearch.firstName !== '') {
                return this.http.get<ILogTypeService>(`/api/single-report?firstName=${dataSearch.firstName}&transactionId=${transactionId}`,
                httpOptions);
            } else if (dataSearch.lastname !== '') {
                return this.http.get<ILogTypeService>(`/api/single-report?lastname=${dataSearch.lastname}&transactionId=${transactionId}`,
                httpOptions);
            }
        }
    }

    createTransectionId(): number {
        const timestamp = Date.now();
        return timestamp;
    }

}